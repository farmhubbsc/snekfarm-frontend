import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getNestMakerAddress } from 'utils/addressHelpers'
import nestMakerABI from 'config/abi/nestMakerABI.json'
import { farmsConfig } from 'config/constants'
import { getCurrentNest, getNestAddress } from 'utils/callHelpers'
import useRefresh from './useRefresh'
import { useNestMaker } from './useContract'

const useGetNestAddressFromNum = ( nestNum ) => {
  const [nestAddr, setNestAddr] = useState('')
  const [result, setResult] = useState({})
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()
  const nestMakerContract = useNestMaker()

  useEffect(() => {
    const fetchNestAddr = async () => {
    	const theNest = await getNestAddress(nestMakerContract, nestNum, account);
    	setNestAddr( theNest )
    }

    if (account) {
      fetchNestAddr()
    }
  }, [account, fastRefresh, nestNum, nestMakerContract])

  return nestNum
}

export default useGetNestAddressFromNum
