import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farmhub',
    icon: 'FarmhubIcon',
    href: 'https://farmhub.community',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.mouse.farm/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mouse.farm/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Breeding Ground',
    icon: 'MoonIcon',
    href: '/nests',
  },
  // {
  //   label: 'Leaderboard',
  //   icon: 'SunIcon',
  //   href: '/leaderboard',
  // },
  // {
  //   label: 'Layered Farming',
  //   icon: 'HamburgerIcon',
  //   href: '/layered',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x71F2f0ce6e858de06e94aad9eF0cD4FFFa298034',
  //     },
  //     // {
  //     //   label: 'CoinGecko',
  //     //   href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     // },
  //     // {
  //     //   label: 'CoinMarketCap',
  //     //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     // },
  //     // {
  //     //   label: 'AstroTools',
  //     //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     // },
  //   ],
  // },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/farmhubbsc",
      },
      {
        label: "Docs",
        href: "https://docs.farmhub.community/",
      },
      // {
      //   label: "Blog",
      //   href: "https://goosefinance.medium.com/",
      // },
    ],
  },
  {
    label: 'Audit by Solidity',
    icon: 'AuditIcon',
    href: 'https://solidity.finance/',
  },
]

export default config
