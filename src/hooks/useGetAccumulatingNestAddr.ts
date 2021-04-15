import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getNestMakerAddress } from 'utils/addressHelpers'
import nestMakerABI from 'config/abi/nestMakerABI.json'
import { farmsConfig } from 'config/constants'
import { getCurrentNest } from 'utils/callHelpers'
import useRefresh from './useRefresh'
import { useNestMaker } from './useContract'

const useGetAccumulatingNestAddr = () => {
  const [nestNum, setNestNum] = useState(0)
  const [accumulatingNest, setAccumulatingNest] = useState(0)
  const [accumulatingNestAddr, setAccumulatingNestAddr] = useState('')
  const [result, setResult] = useState({})
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()
  const nestMakerContract = useNestMaker()

  useEffect(() => {
    const fetchCurrentNest = async () => {
    	const theNest = await getCurrentNest(nestMakerContract, account);
    	setAccumulatingNest( theNest.nestNum )
      setAccumulatingNestAddr( theNest.theAddress )
      setResult( theNest )
    }

    
    fetchCurrentNest()
    
  }, [nestNum, account, nestMakerContract])

  return accumulatingNestAddr
}

export default useGetAccumulatingNestAddr
