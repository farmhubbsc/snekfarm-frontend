import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  depositBlock?: number
  isTokenOnly?: boolean
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid, depositBlock, isTokenOnly }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  // const displayBalance = rawEarningsBalance.toLocaleString()

  let processedEarnings = 0;
  let testBlocks;
  let testLimit;

  if( depositBlock ) {
    const currentBlock = JSON.parse(window.sessionStorage.getItem("blockNum") );
    const blocksStaked = currentBlock - depositBlock;

    let blockLimit = 0;
    if( isTokenOnly ) {
      blockLimit = 28800;
    } else {
      blockLimit = 201600;
    }

    testBlocks = blocksStaked;
    testLimit = blockLimit;

    let avgReward;

    if( blocksStaked > blockLimit ) {
      // console.log(parseInt(earnings.toString(), 10));
      avgReward = ( (parseInt(earnings.toString(), 10)) / 1000000000000000000) / blocksStaked;
      const maxReward = avgReward * blockLimit;
      processedEarnings = maxReward;
    }

  }

  let displayBalance;

  if( processedEarnings ) {
    displayBalance = processedEarnings;
  } else {
    displayBalance = earnings.toLocaleString();
  }

  return (
    <Flex mb='8px' justifyContent='space-between' alignItems='center'>
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
      <BalanceAndCompound>
        {pid === 11 ?
          <Button
            disabled={rawEarningsBalance === 0 || pendingTx}
            size='sm'
            variant='secondary'
            marginBottom='15px'
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString())
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </Button>
          : null}
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
