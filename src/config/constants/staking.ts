import contracts from './contracts'
import { LockedConfig, QuoteToken } from './types'

const API_URL = process.env.REACT_APP_API_URL

// Launch: LockedConfig[]

const arr = [
//     {
//         pid: 0,
//         tokenSymbol: 'VSW',
//         lpSymbol: 'VSW-BNB LP',
//         tokenAddresses: {
//             97: '0xF1EC93411aea1aB4d5E60270C61b028F35B5adE0',
//             56: '0x64c5bFAE6f4B597F82b6ae6Adc033f743241840B',
//         },
//         quoteTokenSymbol: QuoteToken.BNB,
//         quoteTokenAdresses: contracts.wbnb,
//         lpAddress: {
//           97: '0x9C422b5475a8Ee492f499E450Eb235909F094201',
//           56: '0x354F0F950FdcaE019269245ed7e3F7432aF48237',
//       },
//       contractAddress: {
//         97: '0x93EAdfC94b7b529E52c0da45B61f1A485a9F32ac',
//         56: '0x5F39097a3820B5F1703C30aB62ea4319dE31eAA1',
//     }
//     },
//     {
//       pid: 1,
//       lpSymbol: 'BTCB-BNB LP',
//       tokenSymbol: 'BTCB',
//       tokenAddresses: {
//           97: '0xF1EC93411aea1aB4d5E60270C61b028F35B5adE0',
//           56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
//       },
//       quoteTokenSymbol: QuoteToken.BNB,
//       quoteTokenAdresses: contracts.wbnb,
//       lpAddress: {
//         97: '0xf712c7897456466a70A77d95529273cE9edE24EF',
//         56: '0x8690D907c9F0a62a876f2d904CeE5aad74252A65',
//     },
//       contractAddress: {
//         97: '0xcD6A7411694cfC26816Ff54765B7cfd879E4B019',
//         56: '0x09ad34190F5688A861852Ddf88d58CCB7BC71d1C',
//     }
//   },
//   {
//     pid: 2,
//     lpSymbol: 'ETH-BNB LP',
//     tokenSymbol: 'ETH',
//     tokenAddresses: {
//         97: '0xF1EC93411aea1aB4d5E60270C61b028F35B5adE0',
//         56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
//     },
//     quoteTokenSymbol: QuoteToken.BNB,
//     quoteTokenAdresses: contracts.wbnb,
//     lpAddress: {
//       97: '0xC5A91AaCA78f92d4fd2c1CF78c76Ca6a2a025403',
//       56: '0xE79c82D27d6eAbd06acAA6905aC5Ac700B468d63',
//   },
//     contractAddress: {
//       97: '0x79945d97934779dCe6431E90D89fA6726D1121AE',
//       56: '0x86Aab7226BF72d5527209804DE350d1A26283930',
//   }
// }
]

const fetchData = async () =>{
  const response = await fetch(`${API_URL}/get-boosted-farms`);
  const user = await response.json();
    localStorage.removeItem("boosted")
    console.log("data dump------->")
    localStorage.setItem("boosted",JSON.stringify(user));
   
}

const data = fetchData();

const obj = JSON.parse(localStorage.getItem('boosted'))
// const arr = []

if(obj !== null){
  Object.keys(obj).forEach(function(item) {
    arr.push(obj[item]);
  })
}

const Launch: LockedConfig[] = arr;

export default Launch