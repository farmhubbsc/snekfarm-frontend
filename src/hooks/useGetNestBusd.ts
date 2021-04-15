import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getNestMakerAddress } from 'utils/addressHelpers'
import nestMakerABI from 'config/abi/nestMakerABI.json'
import { farmsConfig } from 'config/constants'
import { getCurrentNest, getNestBusd } from 'utils/callHelpers'
import useRefresh from './useRefresh'
import { useNestMaker, useNest } from './useContract'

const useGetNestBusd = ( address ) => {
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()
  const [busd, setBusd] = useState(0);
  const nestMakerContract = useNestMaker()
  const nestContract = useNest( address )

  useEffect(() => {
    const fetchCurrentNest = async () => {
    	const busdVal = await getNestBusd(nestContract, account);
      setBusd(busdVal)
    }

    
    fetchCurrentNest()
    
  }, [account, fastRefresh, nestContract])

  return busd
}

export default useGetNestBusd
