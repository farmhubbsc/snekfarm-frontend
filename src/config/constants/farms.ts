import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    isTimeLimit: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MOUSE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4507e26d4161ac215185e185deb3ef9398ae8fc6',
    },
    tokenSymbol: 'MOUSE',
    tokenAddresses: {
      97: '',
      56: '0x71F2f0ce6e858de06e94aad9eF0cD4FFFa298034',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'MOUSE-TOAD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x776d304ce9c176333d1855ca1735e93e9d01e686',
  //   },
  //   tokenSymbol: 'TOAD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x71F2f0ce6e858de06e94aad9eF0cD4FFFa298034',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },

  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    isTimeLimit: true,
    lpSymbol: 'MOUSE',
    lpAddresses: {
      97: '',
      56: '0x71F2f0ce6e858de06e94aad9eF0cD4FFFa298034',
    },
    tokenSymbol: 'MOUSE',
    tokenAddresses: {
      97: '',
      56: '0x71F2f0ce6e858de06e94aad9eF0cD4FFFa298034',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  // {
  //   pid: 4,
  //   risk: 3,
  //   lpSymbol: 'BUSD-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },

  // {
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
 //  {
 //    pid: 5,
 //    risk: 2,
 //    lpSymbol: 'BTCB-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
 //    },
 //    tokenSymbol: 'BTCB',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },
  
 //  {
 //    pid: 7,
 //    risk: 1,
 //    lpSymbol: 'DAI-BUSD LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
 //    },
 //    tokenSymbol: 'DAI',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 8,
 //    risk: 1,
 //    lpSymbol: 'TPT-BUSD LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4db28767D1527bA545CA5bbdA1C96a94ED6ff242',
 //    },
 //    tokenSymbol: 'TPT',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xeca41281c24451168a37211f0bc2b8645af45092',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 9,
 //    risk: 1,
 //    lpSymbol: 'WATCH-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xdc6c130299e53acd2cc2d291fa10552ca2198a6b',
 //    },
 //    tokenSymbol: 'WATCH',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 10,
 //    risk: 1,
 //    lpSymbol: 'XMARK-BUSD LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x292ca56ed5b3330a19037f835af4a9c0098ea6fa',
 //    },
 //    tokenSymbol: 'XMARK',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x26a5dfab467d4f58fb266648cae769503cec9580',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 11,
 //    risk: 2,
 //    lpSymbol: 'BMXX-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67',
 //    },
 //    tokenSymbol: 'BMXX',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x4131b87f74415190425ccd873048c708f8005823',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 12,
 //    risk: 2,
 //    lpSymbol: 'IOTX-BUSD LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x36b8b28d37f93372188f2aa2507b68a5cd8b2664',
 //    },
 //    tokenSymbol: 'IOTX',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 13,
 //    risk: 2,
 //    lpSymbol: 'BOR-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x86e650350c40a5178a5d014ba37fe8556232b898',
 //    },
 //    tokenSymbol: 'BOR',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 14,
 //    risk: 2,
 //    lpSymbol: 'SUSHI-ETH LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x17580340F3dAEDAE871a8C21D15911742ec79e0F',
 //    },
 //    tokenSymbol: 'SUSHI',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
 //    },
 //    quoteTokenSymbol: QuoteToken.ETH,
 //    quoteTokenAdresses: contracts.eth,
 //  },

 //  {
 //    pid: 15,
 //    risk: 1,
 //    lpSymbol: 'ETH-BETH LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x99d865Ed50D2C32c1493896810FA386c1Ce81D91',
 //    },
 //    tokenSymbol: 'BETH',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
 //    },
 //    quoteTokenSymbol: QuoteToken.ETH,
 //    quoteTokenAdresses: contracts.eth,
 //  },

 //  {
 //    pid: 16,
 //    risk: 1,
 //    lpSymbol: 'UST-BUSD LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xD1F12370b2ba1C79838337648F820a87eDF5e1e6',
 //    },
 //    tokenSymbol: 'UST',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  // // We fucked up pid 11

 //  {
 //    pid: 33,
 //    risk: 1,
 //    isTokenOnly: true,
 //    lpSymbol: 'TOAD',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x8C1068F4e72042819106EF914390266e6d484C76', // EGG-BUSD LP (BUSD-BUSD will ignore)
 //    },
 //    tokenSymbol: 'TOAD',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x22D67B3f6aCdf8c0682f6FB20590E902DeEA6BA1',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 17,
 //    risk: 1,
 //    isTokenOnly: true,
 //    lpSymbol: 'BUSD',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4507e26d4161ac215185e185deb3ef9398ae8fc6', // EGG-BUSD LP (BUSD-BUSD will ignore)
 //    },
 //    tokenSymbol: 'BUSD',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },



 //  {
 //    pid: 18,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'WBNB',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
 //    },
 //    tokenSymbol: 'WBNB',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 19,
 //    risk: 1,
 //    isTokenOnly: true,
 //    lpSymbol: 'USDT',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
 //    },
 //    tokenSymbol: 'USDT',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x55d398326f99059ff775485246999027b3197955',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 20,
 //    risk: 2,
 //    isTokenOnly: true,
 //    lpSymbol: 'BTCB',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
 //    },
 //    tokenSymbol: 'BTCB',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 21,
 //    risk: 2,
 //    isTokenOnly: true,
 //    lpSymbol: 'ETH',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
 //    },
 //    tokenSymbol: 'ETH',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 22,
 //    risk: 1,
 //    isTokenOnly: true,
 //    lpSymbol: 'DAI',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
 //    },
 //    tokenSymbol: 'DAI',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 23,
 //    risk: 1,
 //    isTokenOnly: true,
 //    lpSymbol: 'USDC',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
 //    },
 //    tokenSymbol: 'USDC',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 24,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'DOT',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
 //    },
 //    tokenSymbol: 'DOT',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 25,
 //    risk: 4,
 //    isTokenOnly: true,
 //    lpSymbol: 'CAKE',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
 //    },
 //    tokenSymbol: 'CAKE',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 26,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'BSCX',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
 //    },
 //    tokenSymbol: 'BSCX',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 27,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'AUTO',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4d0228EBEB39f6d2f29bA528e2d15Fc9121Ead56', // AUTO-BNB LP
 //    },
 //    tokenSymbol: 'AUTO',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 28,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'TPT',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4db28767D1527bA545CA5bbdA1C96a94ED6ff242', // TPT-BUSD LP
 //    },
 //    tokenSymbol: 'TPT',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xeca41281c24451168a37211f0bc2b8645af45092',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 29,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'WATCH',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xdc6c130299e53acd2cc2d291fa10552ca2198a6b', // AUTO-BNB LP
 //    },
 //    tokenSymbol: 'WATCH',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 // {
 //    pid: 30,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'XMARK',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x292Ca56ED5b3330A19037f835Af4A9c0098EA6Fa', // XMARK-BUSD LP
 //    },
 //    tokenSymbol: 'XMARK',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x26a5dfab467d4f58fb266648cae769503cec9580',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 31,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'BMXX',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67', // AUTO-BNB LP
 //    },
 //    tokenSymbol: 'BMXX',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x4131b87f74415190425ccd873048c708f8005823',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 32,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'IOTX',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x36b8b28d37f93372188f2aa2507b68a5cd8b2664', // AUTO-BNB LP
 //    },
 //    tokenSymbol: 'IOTX',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  // 33 is a pool listed above

 //  {
 //    pid: 34,
 //    risk: 1,
 //    lpSymbol: 'ETH-COMP LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
 //    },
 //    tokenSymbol: 'COMP',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 35,
 //    risk: 1,
 //    lpSymbol: 'USDC-BUSD LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
 //    },
 //    tokenSymbol: 'USDC',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 36,
 //    risk: 1,
 //    lpSymbol: 'REEF-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
 //    },
 //    tokenSymbol: 'REEF',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 37,
 //    risk: 1,
 //    lpSymbol: 'ADA-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
 //    },
 //    tokenSymbol: 'ADA',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

  

 //  {
 //    pid: 38,
 //    risk: 1,
 //    lpSymbol: 'LINK-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
 //    },
 //    tokenSymbol: 'LINK',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 39,
 //    risk: 1,
 //    lpSymbol: 'VAI-BUSD LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xff17ff314925dff772b71abdff2782bc913b3575',
 //    },
 //    tokenSymbol: 'VAI',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
 //    },
 //    quoteTokenSymbol: QuoteToken.BUSD,
 //    quoteTokenAdresses: contracts.busd,
 //  },

 //  {
 //    pid: 40,
 //    risk: 1,
 //    lpSymbol: 'UNI-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
 //    },
 //    tokenSymbol: 'UNI',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 41,
 //    risk: 1,
 //    lpSymbol: 'DOT-BNB LP',
 //    lpAddresses: {
 //      97: '',
 //      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
 //    },
 //    tokenSymbol: 'DOT',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },


 //  // Continue pool list 

 //  {
 //    pid: 42,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'BOR',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x86e650350c40a5178a5d014ba37fe8556232b898', // BSCX-BUSD LP
 //    },
 //    tokenSymbol: 'BOR',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 43,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'bOPEN',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x9d8b7e4a9d53654d82f12c83448d8f92732bc761', // BSCX-BUSD LP
 //    },
 //    tokenSymbol: 'bOPEN',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xF35262a9d427F96d2437379eF090db986eaE5d42',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 44,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'DODO',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x9e642d174b14faea31d842dc83037c42b53236e6', // BSCX-BUSD LP
 //    },
 //    tokenSymbol: 'DODO',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 45,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'SWINGBY',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027', // BSCX-BUSD LP
 //    },
 //    tokenSymbol: 'SWINGBY',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0x71de20e0c4616e7fcbfdd3f875d568492cbe4739',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

 //  {
 //    pid: 46,
 //    risk: 3,
 //    isTokenOnly: true,
 //    lpSymbol: 'BRY',
 //    lpAddresses: {
 //      97: '',
 //      56: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC', // BSCX-BUSD LP
 //    },
 //    tokenSymbol: 'BRY',
 //    tokenAddresses: {
 //      97: '',
 //      56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
 //    },
 //    quoteTokenSymbol: QuoteToken.BNB,
 //    quoteTokenAdresses: contracts.wbnb,
 //  },

  // {
  //   pid: 47,
  //   risk: 3,
  //   isTokenOnly: true,
  //   isLayer1: true,
  //   lpSymbol: 'ML1',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'ML1',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  // {
  //   pid: 8,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 11,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  // {
  //   pid: 13,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 15,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 18,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 21,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 23,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AUTO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'AUTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
