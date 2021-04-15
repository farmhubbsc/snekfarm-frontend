import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@pancakeswap-libs/uikit'
import "./FarmCardCustom.css"
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import useClaim from 'hooks/useClaim'
import { getBalanceNumber } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'
import TimeLimitDepositModal from '../TimeLimitDepositModal'
import TimeLimitWithdrawModal from '../TimeLimitWithdrawModal'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  stakedDollarValue?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  pid?: number
  depositFeeBP?: number
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const TimeLimitStakeAction: React.FC<FarmCardActionsProps> = ({ stakedBalance, stakedDollarValue, tokenBalance, tokenName, pid, depositFeeBP}) => {
  const TranslateString = useI18n()
  const { onStake } = useStake(pid)
  // const { onUnstake } = useUnstake(pid)
  const { onClaim } = useClaim(pid)

  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()

  const [onPresentDeposit] = useModal(<TimeLimitDepositModal max={tokenBalance} onConfirm={onStake} tokenName={tokenName} depositFeeBP={depositFeeBP} />)
  const [onPresentWithdraw] = useModal(
    <TimeLimitWithdrawModal max={stakedBalance} onConfirm={onClaim} tokenName={tokenName} />,
  )

  const dollarValue = stakedDollarValue
    ? `$${Number(stakedDollarValue).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
    : '-'

  const renderStakingButtons = () => {
    return rawStakedBalance === 0 ? (
      <Button className="readable-button" onClick={onPresentDeposit}>Deposit {tokenName}</Button>
    ) : (
      <IconButtonWrapper>
        <Button className="readable-button" onClick={onPresentWithdraw}>Claim</Button>
      </IconButtonWrapper>
    )
  }

  const dollarStyle = {
    opacity: '0.5',
    fontSize: '0.9rem'
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading color={rawStakedBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance} <span className="" style={dollarStyle}>({dollarValue})</span></Heading>
      {renderStakingButtons()}
    </Flex>
  )
}

export default TimeLimitStakeAction
