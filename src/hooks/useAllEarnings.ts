import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { farmsConfig } from 'config/constants'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()
  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {

    if(account !== "null"){
      const params = new URLSearchParams(window.location.search) // id=123
      console.log(params);
      if(params.has('ref')){
        const id = params.get('ref');
        console.log("ID",id)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ parentaddress: id, userwallet:account })
        };
        fetch(`${API_URL}/createUser`, requestOptions)
        .then(response => response.json())
      }else{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ parentaddress: '0x0000000000000000000000000000000000000000', userwallet:account })
        };
        fetch(`${API_URL}/createUser`, requestOptions)
        .then(response => response.json())
      }

      (async() => {
           await fetch(`${API_URL}/getUserData/${account}`)
          .then(response => response.json())
          .then(resp => {
            if(resp.status){
                const rescount = resp.parent;
                console.log("PARENT : ",rescount)
                localStorage.setItem("PARENT",rescount)
              }
          });
       })();
    }


    const fetchAllBalances = async () => {
      const calls = farmsConfig.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingVsw',
        params: [farm.pid, account],
      }))

      const res = await multicall(masterChefABI, calls)

      setBalance(res)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh, API_URL])

  return balances
}

export default useAllEarnings
