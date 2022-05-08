import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const API_URL = process.env.REACT_APP_API_URL

const arr = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'VSW-BUSD LP',
    lpAddresses: {
      97: '0xf712c7897456466a70A77d95529273cE9edE24EF', // vsw-busd testnet
      56: '0x4318EF022dd6eB9eBd04c99fe71F7036f04Cd40C',
    },
    tokenSymbol: 'VSW',
    tokenAddresses: {
      97: '0xF1EC93411aea1aB4d5E60270C61b028F35B5adE0', // vsw testnet
      56: '0xDA64069064175D79ee2C7fE5a742e014283e7351',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xC5A91AaCA78f92d4fd2c1CF78c76Ca6a2a025403', // bnb-busd testnet
      56: '0x386D7A1650bB7b291519F4E29EeFd40814cAFe37',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x8ce7720fd183aec96b676fd8250724b05b0d7a6f',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }

]

const fetchData = async () =>{
  const response = await fetch(`${API_URL}/get-farm-data`);
  const user = await response.json();
  localStorage.removeItem("farmandpool")
  console.log("data dump------->")
  localStorage.setItem("farmandpool",JSON.stringify(user));
   
}

const data = fetchData();

const obj = JSON.parse(localStorage.getItem('farmandpool'))
// const arr = []

if(obj !== null){
  Object.keys(obj).forEach(function(item) {
    if(obj[item].pid > 1)
    arr.push(obj[item]);
  })
}
// localStorage.setItem('datas',JSON.stringify(arr))
const farms: FarmConfig[] = arr

export default farms
