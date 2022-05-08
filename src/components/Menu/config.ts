import { MenuEntry } from '@pancakeswap-libs/uikit'

const baseurl="https://app.veneraswap.com";
const swap="https://exchange.veneraswap.com";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: baseurl,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: swap.concat('/#/swap'),
      },
      {
        label: 'Liquidity',
        href: swap.concat('/#/pool'),
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: baseurl.concat('/farms'),
  },
  {
    label: 'Stake',
    icon: 'PoolIcon',
    href: baseurl.concat('/pools'),
    calloutClass: 'menulink'
  },
  {
    label: 'Boosted Farms',
    icon: 'BoostIcon',
    href: baseurl.concat('/boostedfarms'),
  },
  {
    label: 'iVSW',
    icon: 'IfoIcon',
    href: 'https://ivsw.veneraswap.com',
  },
  {
    label: 'Referral',
    icon: 'ReferralIcon',
    href: baseurl.concat('/referral'),
  },
  
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/comingsoon',
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
  //       href: '#',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: '#',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: '#',
  //     },
  //     {
  //       label: 'How it works',
  //       href: '#',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.veneraswap.com/venera-swap/',
      },     
      
    ],
  },
  // {
  //   label: 'Buy MEGAFOX',
  //   icon: 'TicketIcon',
  //   href: '#',
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: '#',
  // },
]

export default config
