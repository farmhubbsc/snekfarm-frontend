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
    // href: 'https://farmhub.community',
    items: [
      {
        label: 'Farmhub',
        href: 'https://farmhub.community',
        icon: 'FarmhubIcon'
      },
      {
        label: 'Toad.Farm',
        href: 'https://toad.farm',
        icon: 'ToadFarmIcon'
      },
      {
        label: 'Mouse.Farm',
        href: 'https://mouse.farm',
        icon: 'MouseFarmIcon'
      },
      {
        label: 'Snek.Farm',
        href: 'https://snek.farm',
        icon: 'SnekFarmIcon'
      },
      {
        label: 'Cobra.Farm',
        href: 'https://cobra.farm',
        icon: 'CobraIcon'
      },
      {
        label: 'Eagle.Farm',
        href: 'https://eagle.farm',
        icon: 'EagleFarmIcon'
      },
      {
        label: 'Eagle\'s Nest',
        href: 'https://eaglenest.finance',
        icon: 'EagleNestIcon'
      },
    ]
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.snek.farm/#/swap?outputCurrency=0x6e74c976e67feae8e83635936ef79f969e14e869',
        icon: 'TradeIcon',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.snek.farm/#/pool',
        icon: 'LiquidityIcon',
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
    icon: 'SnekBreeding',
    href: '/nests',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/farmhubbsc",
        icon: 'GithubIcon', 
      },
      {
        label: "Docs",
        href: "https://docs.farmhub.community/",
        icon: 'BooksIcon',
      },
      // {
      //   label: "Blog",
      //   href: "https://farmhub.medium.com/",
      // },
    ],
  },
  {
    label: 'Audit by Solidity',
    icon: 'AuditIcon',
    href: 'https://solidity.finance/audits/Farmhub/',
  },
]

export default config
