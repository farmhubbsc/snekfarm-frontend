import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData, useTotalValue } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'
import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Memes = lazy(() => import('./views/Memes'))
const Leaderboard = lazy(() => import('./views/Leaderboard'))
const Layered = lazy(() => import('./views/Layered'))
const Tvl = lazy(() => import('./views/Tvl'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
	EXPONENTIAL_AT: 1000,
	DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
	const { account, connect } = useWallet()
	const totalValue = useTotalValue()
	const wallet = useWallet()
	if (wallet.getBlockNumber != null) {
		const theBlock = JSON.stringify(wallet.getBlockNumber())
		window.sessionStorage.setItem('blockNum', theBlock)
	}
	useEffect(() => {
		if (!account && window.localStorage.getItem('accountStatus')) {
			connect('injected')
		}
	}, [account, connect])

	useFetchPublicData()
	useGetDocumentTitlePrice()

	return (
		<Router>
			<ResetCSS />
			<GlobalStyle />
			<Menu>
				<Suspense fallback={<PageLoader />}>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/farms">
							<Farms />
						</Route>
						<Route path="/nests">
							<Farms tokenMode />
						</Route>
						<Route path="/memes">
							<Memes />
						</Route>
						<Route path="/leaderboard">
							<Leaderboard />
						</Route>
						<Route path="/layered">
							<Layered />
						</Route>
						<Route path="/tvl">
							<div className="tvl-amount">
								{totalValue.toNumber()}
							</div>
						</Route>
						{/* <Route path="/pools"> */}
						{/*  <Pools /> */}
						{/* </Route> */}
						{/* <Route path="/lottery"> */}
						{/*  <Lottery /> */}
						{/* </Route> */}
						{/* <Route path="/ifo"> */}
						{/*  <Ifos /> */}
						{/* </Route> */}
						{/* <Route path="/nft"> */}
						{/*  <Nft /> */}
						{/* </Route> */}
						{/* Redirect */}
						{/* <Route path="/staking"> */}
						{/*  <Redirect to="/pools" /> */}
						{/* </Route> */}
						{/* <Route path="/syrup"> */}
						{/*  <Redirect to="/pools" /> */}
						{/* </Route> */}
						{/* 404 */}
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</Menu>
			<NftGlobalNotification />
		</Router>
	)
}

export default React.memo(App)
