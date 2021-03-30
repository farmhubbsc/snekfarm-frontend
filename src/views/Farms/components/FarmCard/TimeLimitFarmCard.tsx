import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import Countdown from 'react-countdown';
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import './FarmCardCustom.css'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { QuoteToken } from 'config/constants/types'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { useMasterchef, useSousChef } from 'hooks/useContract'
import masterChefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import TimeLimitCardActionsContainer from './TimeLimitCardActionsContainer'
import ApyButton from './ApyButton'


export interface TimeLimitFarmWithStakedValue extends Farm {
  apy?: BigNumber
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(45deg,
  rgba(255, 0, 0, 1) 0%,
  rgba(255, 154, 0, 1) 10%,
  rgba(208, 222, 33, 1) 20%,
  rgba(79, 220, 74, 1) 30%,
  rgba(63, 218, 216, 1) 40%,
  rgba(47, 201, 226, 1) 50%,
  rgba(28, 127, 238, 1) 60%,
  rgba(95, 21, 242, 1) 70%,
  rgba(186, 12, 248, 1) 80%,
  rgba(251, 7, 217, 1) 90%,
  rgba(255, 0, 0, 1) 100%);
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  box-shadow: rgb(0 0 0 / 45%) 0px 0px 21px 4px;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: TimeLimitFarmWithStakedValue 
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  ethPrice?: BigNumber
  ethereum?: provider
  account?: string
  cooldown?: number
}

const TimeLimitFarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, bnbPrice, ethereum, account }) => {
  let depositBlock;

  const TranslateString = useI18n()

  const [stakeCooldown, setStakeCooldown] = useState(0);
  const [showExpandableSection, setShowExpandableSection] = useState(false)

  // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()
  const farmImage = farm.isTokenOnly ? farm.tokenSymbol.toLowerCase() : `${farm.tokenSymbol.toLowerCase()}-${farm.quoteTokenSymbol.toLowerCase()}`

  function GetBlockNum() {
    const wallet = useWallet()
    const blockNum = wallet.getBlockNumber()
    return blockNum
  }

  const totalValue: BigNumber = useMemo(() => {

    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const lpLabel = farm.lpSymbol
  const earnLabel = 'SNEK'
  const farmAPY = farm.apy && farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, risk } = farm


 //  const dispatch = useDispatch()
 //  const masterChefContract = useMasterchef()

  
 //  async function getTimer() {
 //    const txHash = await masterChefContract.methods.userInfo(farm.pid, account).call().then((result) => {
 //      console.log(result)
 //      if( result.depositBlock !== "0") {
 //        depositBlock = result.depositBlock;
 //        // Check time difference between current block and depositBlock 
 //        const blockNum = GetBlockNum()
 //        console.log(blockNum - depositBlock)
 //      }
 //    })
 //  }

 // getTimer()


  let cooldownTimer;
  if( farm.userData !== undefined ) {
    const stakeBal = new BigNumber( farm.userData.stakedBalance );

    const prop = 'cooldown'
    if( prop in farm.userData ) {
      const timeNum = farm.userData.cooldown
      // Multiply by 1000 because it takes ms as parameter
      if( timeNum > 0 && stakeBal.isZero() ) {
        cooldownTimer = <span className="farm-countdown farm-countdown-nocooldown">Ready</span>
      } else if( timeNum > 0 ) { 
        cooldownTimer = <Countdown className="farm-countdown farm-countdown-farming" date={Date.now() + (timeNum * 1000) } />
      } else if( stakeBal.isZero() ) {
        cooldownTimer = <span className="farm-countdown farm-countdown-nocooldown">Ready</span>
      } else {
        cooldownTimer = <span className="farm-countdown farm-countdown-nocooldown">Claim Now</span>
      }
      // } else if( stakeBal === zeroBig || farm.userData.depositBlock === zeroBig) {
        // cooldownTimer = <span className="farm-countdown farm-countdown-nocooldown">Ready</span>
      // }
       // else {
        // cooldownTimer = <span className="farm-countdown farm-countdown-nocooldown">Claim Now</span>
      // }
    }
  }

  let feeText;
  let feeAmount;
  if( farm.pid === 4 || farm.pid === 5 ) {
    feeText = <Text style={{ fontSize: '24px' }}>🔥 Fee:</Text>
    feeAmount = <Text bold style={{ fontSize: '24px' }}>{farm.depositFeeBP / 100}%</Text>
  } else {
    feeText = <Text style={{ fontSize: '24px' }}>🦅 Fee:</Text>
    feeAmount = <Text bold style={{ fontSize: '24px' }}>{farm.depositFeeBP / 100}%</Text>
  }
  
  let thisPoolIsMostEfficient = false;
  if( window.sessionStorage.getItem("mostEfficientPool") === farm.tokenSymbol ) {
    thisPoolIsMostEfficient = true; 
  }

  return (
    <FCard>
      {farm.tokenSymbol === 'SNEK' && <StyledCardAccent />}
      {thisPoolIsMostEfficient && <StyledCardAccent />}
      {cooldownTimer}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        risk={risk}
        depositFee={farm.depositFeeBP}
        farmImage={farmImage}
        tokenSymbol={farm.tokenSymbol}
      />
      {!removed && (
        <Flex justifyContent='space-between' alignItems='center'>
          <Text>{TranslateString(352, 'APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apy ? (
              <>
                <ApyButton
                  lpLabel={lpLabel}
                  quoteTokenAdresses={quoteTokenAdresses}
                  quoteTokenSymbol={quoteTokenSymbol}
                  tokenAddresses={tokenAddresses}
                  cakePrice={cakePrice}
                  apy={farm.apy}
                />
                {farmAPY}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent='space-between'>
        <Text>{TranslateString(318, 'Earn')}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <Flex justifyContent='space-between'>
        {feeText}
        {feeAmount}
      </Flex>
      <TimeLimitCardActionsContainer farm={farm} ethereum={ethereum} account={account} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          isTokenOnly={farm.isTokenOnly}
          bscScanAddress={
            farm.isTokenOnly ?
              `https://bscscan.com/token/${farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              :
              `https://bscscan.com/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          totalValueFormated={totalValueFormated}
          lpLabel={lpLabel}
          quoteTokenAdresses={quoteTokenAdresses}
          quoteTokenSymbol={quoteTokenSymbol}
          tokenAddresses={tokenAddresses}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default TimeLimitFarmCard
