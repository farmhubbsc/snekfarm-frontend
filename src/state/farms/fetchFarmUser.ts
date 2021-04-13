import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import { getMasterChefAddress } from 'utils/addressHelpers'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchFarmUserAllowances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return { address: lpContractAddress, name: 'allowance', params: [account, masterChefAdress] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchefABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'pendingSnek',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(masterchefABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}

export const fetchFarmUserDepositTime = async( userAddr: string ) => {
  const masterChefAdress = getMasterChefAddress();

  const calls = farmsConfig.map((farm) => {
    return { 
      address: masterChefAdress,
      name: 'userInfo',
      params: [farm.pid, userAddr],
    }
  })

  const rawData = await multicall(masterchefABI, calls)
  const parsedData = rawData.map((data) => {

    const depositBlock = parseInt( data[2]._hex, 16 );

    return new BigNumber(depositBlock).toJSON();

  })

  return parsedData

}


export const fetchFarmUserCooldowns = async (userAddr: string, blockNumber: number) => {
  const masterChefAdress = getMasterChefAddress();

  const cooldownCalls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'poolInfo',
      params: [farm.pid],
    }
  })

  const rawPoolInfo = await multicall(masterchefABI, cooldownCalls)

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'userInfo',
      params: [farm.pid, userAddr],
    }
  })

  let farmCount = 0;

  const rawBlockNums = await multicall(masterchefABI, calls)
  const parsedBlockNums = rawBlockNums.map((blocknums) => {

    let poolCooldown = 0;

    if( typeof( rawPoolInfo[ farmCount] ) === 'object' ) {
      const limitHex = rawPoolInfo[farmCount].stakeTimeLimit._hex;
      poolCooldown = parseInt( limitHex, 16 );
    }

    farmCount++;

    // Calculate cooldown based on current block number 
    const depositBlock = parseInt( blocknums[2]._hex, 16 );
    // const curBlock = window.sessionStorage.getItem("blockNum");
    // const curBlockInt = JSON.parse(curBlock)
    const curBlockInt = blockNumber;
    const blocksSinceDeposit = curBlockInt - depositBlock;
    let secondsSinceDeposit = (blocksSinceDeposit * 3)

    if( depositBlock === 0 ) {
      secondsSinceDeposit = 0;
    }
      
    // 25 200 block deposit cooldown 
    const secondsBetweenDeposits = poolCooldown * 3
    let secondsLeft = 0;
    
    if( secondsBetweenDeposits > secondsSinceDeposit && secondsSinceDeposit !== 0) {
      // The user is on cooldown 
      secondsLeft = secondsBetweenDeposits - secondsSinceDeposit
    } else {
      // The user is not on cooldown 
      secondsLeft = 0
    }

    return new BigNumber(secondsLeft).toJSON()
  })
  
  return parsedBlockNums
}