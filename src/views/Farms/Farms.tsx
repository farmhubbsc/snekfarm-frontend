import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, usePriceEthBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import TimeLimitFarmCard from './components/FarmCard/TimeLimitFarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps{
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const ethPrice = usePriceEthBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const {tokenMode} = farmsProps;

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)
  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )


  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.snekPerBlock || 1).times(new BigNumber(farm.poolWeight)) .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear);
        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0);

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice);
        } else if( farm.quoteTokenSymbol === QuoteToken.ETH ) {
          totalValue = totalValue.times(ethPrice);
        }

        if(totalValue.comparedTo(0) > 0){
          apy = apy.div(totalValue);
        }

        return { ...farm, apy }
      })

      return farmsToDisplayWithAPY.map((farm) => {
        return farm.isTimeLimit ?
          <TimeLimitFarmCard
            key={farm.pid}
            farm={farm}
            removed={removed}
            bnbPrice={bnbPrice}
            ethPrice={ethPrice}
            cakePrice={cakePrice}
            ethereum={ethereum}
            account={account}
          />
        : 
          <FarmCard
            key={farm.pid}
            farm={farm}
            removed={removed}
            bnbPrice={bnbPrice}
            ethPrice={ethPrice}
            cakePrice={cakePrice}
            ethereum={ethereum}
            account={account}
          />
      })
    },
    [bnbPrice, ethPrice, account, cakePrice, ethereum],
  )

  	const warning = {
		    borderRadius: "6px",
		    marginBottom: "10px",
		    color: "white",
		    padding: "5px",
		    display: 'flex',
  	}

  	const margintop = {
  		marginTop: '18px'
  	}

    const linkStyle = {
      textDecoration: 'underline',
    }

    const warningText = {
      color: 'wheat',
    }

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center', color: 'wheat' }}>
        {
          tokenMode ?
            TranslateString(10002, 'Stake tokens to earn SNEK')
            :
          TranslateString(320, 'Stake LP tokens to earn SNEK')
        }
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" className="farm-description" style={{ textAlign: 'left', fontWeight: 400 }}>
        <br/>
        <span style={warningText}>- You will stop earning SNEK when the timer ends.</span>
        <br/>
        <span style={warningText}>- Farm time limit: 7 days.</span>
        <br/>
        <span style={warningText}>- Pool time limit: 21 hours.</span>
        <br/>
        <span style={warningText}>- Claiming your reward will unstake your funds.</span>
        <br/>
        <span style={warningText}>- For more information, visit our <a href="https://docs.farmhub.community" rel="noreferrer" target="_blank" style={linkStyle}> documentation page</a></span>
      </Heading>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly}/>
      <div>
        <Divider style={margintop}/>
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      <Image src="/images/snek/8.png" alt="illustration" width={1352} height={587} responsive />
    </Page>
  )
}

export default Farms
