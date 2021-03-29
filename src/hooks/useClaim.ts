import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { claim } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract'

const useClaim = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleClaim = useCallback(
    async () => {
      const txHash = await claim(masterChefContract, pid, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [ account, dispatch, masterChefContract, pid ],
  )

  return { onClaim: handleClaim }

}

export default useClaim
