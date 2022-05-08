import addresses from 'config/constants/contracts'
import React, { useMemo,useState } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton, Text, Image, Progress, Button, Input, useModal,CalculateIcon, IconButton } from '@pancakeswap-libs/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'

import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import { usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import BigNumber from 'bignumber.js'
import presaleABI from 'config/abi/masterchefv2.json'
import proxyABI from 'config/abi/proxy.json'
import erc20 from 'config/abi/erc20.json'
import { AbiItem } from 'web3-utils'
import { Address , QuoteToken } from 'config/constants/types'
import { provider } from 'web3-core'
import useWeb3 from 'hooks/useWeb3'

import UnlockButton from 'components/UnlockButton'
import Web3 from 'web3'


import LaunchpadModal from './LaunchpadModal'
import ApyButton from './ApyButton'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'
import WarningModal from '../WarningModal'



const CHAIN_ID = process.env.REACT_APP_CHAIN_ID





// import { getFarmApy } from 'utils/apy'
// import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'

export interface ApyButtonProps {
  lpLabel?: string
  cakePrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

interface StakeCardProps {
  tokenAddress: Address
  tokenSymbol: string
  pid?: number
  ethereum?: provider
  account?: string
  quoteTokenAdresses: Address
  quoteTokenSymbol:string
  lpAddress?:Address
  lpSymbol?:string
  isTokenOnly?: boolean
  contractAddress?: Address
  }


interface FarmCardActionsProps {
  lpAddress: Address
  pid?: number
  account?: string
}


const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
  border-radius:10px;
  margin-top:20px;
  margin-bottom:20px;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled}
`

const Action = styled.div`
  padding-top: 16px;
`


const StakingCard: React.FC<StakeCardProps> = ({tokenAddress,tokenSymbol,pid,ethereum,account,quoteTokenSymbol,quoteTokenAdresses,lpAddress,lpSymbol,isTokenOnly,contractAddress }) => {
  const TranslateString = useI18n()
  // const { onStake } = useStake()
  const web3 =  useWeb3()
  const [days, setDays] = useState('')
  const [unstake, setUnstake] = useState('')
  const [amount, setAmount] = useState('')
  const [farmAPR, setfarmAPR] = useState('')
  const [farmAPY, setfarmAPY] = useState('')
  const [tokenDecimal, settokenDecimal] = useState('')
  const [boosFactor,setboostFactor] = useState('')
  const [pending, setPending] = useState('0')
  const [total, setTotal] = useState('0')
  const [staked, setStacked] = useState('0')
  const [status, setStatus] = useState(false)
  const [allowance, setAllowance] = useState(false)
  const [requestedApproval, setrequestedApproval] = useState(false)
  const [cakePrice,setcakePrice] = useState('')
  const [depositFeeBP,setdepositFeeBP] = useState('')
  const [allowanceValue,setallowanceValue] = useState('')
  const [onPresentLaunch] = useModal(<LaunchpadModal />)
  const [rewardDecimal,setrewardDecimal] = useState('')
  const [lpDecimal,setlpDecimal] = useState('')
  const [mintPercent,setmintPercent] = useState('0')
  const [isClaim, setisClaimble] = useState(true)
  const bnbPrice = usePriceBnbBusd()

const lockedStake =  contractAddress.toString();
const proxyGauge = addresses.gaugeProxy[CHAIN_ID];
const presaleAbi = (presaleABI as unknown) as AbiItem
const erc20Abi  =(erc20 as unknown) as AbiItem
const proxyAbi = (proxyABI as unknown) as AbiItem
const Stakes = new web3.eth.Contract(presaleAbi,lockedStake);
const Proxy = new web3.eth.Contract(proxyAbi,proxyGauge);
const erc20Token = new web3.eth.Contract(erc20Abi,tokenAddress.toString());
const quoteToken = new web3.eth.Contract(erc20Abi,quoteTokenAdresses.toString());
const lpToken = new web3.eth.Contract(erc20Abi,lpAddress.toString());


const handleData = async () => {
  try {
    let approveToken = null;
    if(!isTokenOnly)
    approveToken = lpToken;
    else
    approveToken = erc20Token;

    const decimal = await approveToken.methods.decimals().call();
    settokenDecimal(decimal.toString())
   // const pool= await Stakes.methods.poolInfo(pid.toString()).call();
   const depositFee = await Proxy.methods.getDepositFeeRate().call();
    setdepositFeeBP(depositFee.toString())
    const lpdecmial = await lpToken.methods.decimals().call()
    setlpDecimal(lpdecmial)
    setrewardDecimal('18') 
   if(account){
    const userBalance = await Stakes.methods.balanceOf(account).call();
    console.log("data pending : ",userBalance)
    if(parseInt(userBalance) > 0)
    setisClaimble(false)
    // const bf = await Stakes.methods.BoostingFactor(pid,account).call();
    // const bf2 = (parseInt(bf) / 100) / 0.4;
    // const iswx = await Stakes.methods.iswx().call();
    // const iswxToken = new web3.eth.Contract(erc20Abi,iswx.toString());
    // const totalSupply = await iswxToken.methods.totalSupply().call();
    // const balanceInMc = await iswxToken.methods.balanceOf(account).call();
    // const percentMint = parseInt(balanceInMc) / parseInt(totalSupply) * 100;
    const dBalance = await Stakes.methods.derivedBalance(account).call();
   const earned = await Stakes.methods.earned(account).call();
   const weight = await Proxy.methods.weights(lpAddress).call();
   const totalW = await Proxy.methods.totalWeight().call();
    const percentMint = parseInt(totalW) ? (parseInt(weight)/parseInt(totalW))*100 : 0;
   const bf = parseInt(userBalance) ? (parseInt(dBalance) / parseInt(userBalance))/0.4 : 0;
    setmintPercent(percentMint.toFixed(2).toString())
    setboostFactor(bf.toFixed(2));
   setStacked(userBalance)
   console.log("Boost : ==>",dBalance,earned,weight,userBalance)
    const dataF = (parseInt(earned)) /10**parseInt(rewardDecimal)
    setPending(dataF.toFixed(3))

    const allownce = await approveToken.methods.allowance(account,lockedStake).call();
    console.log("allowance : ",allownce)
    setallowanceValue(allownce.toString())
    if((allownce) > 0)
    setAllowance(true);
    const balance = await approveToken.methods.balanceOf(account).call();
    
    setAmount(balance.toString())
    console.log("balance of ",balance)
   }
   
    
    const price1 = await quoteToken.methods.balanceOf(lpAddress).call();
    const price2 = await erc20Token.methods.balanceOf(lpAddress).call();
    const TokenPrice = parseInt(price1)/parseInt(price2)
    setcakePrice(TokenPrice.toString())
    calculateAPR(cakePrice)
   
  
  }
  catch(e) {
        console.error(e)
      }
    
}
 handleData()

 const calculateAPR = async(cake)=>{
     // eggPerBlock
     const eggPerBlock = await Stakes.methods.rewardPerToken().call();
     console.log("eggPerBlock : ",eggPerBlock)
     // poolWeight
     // lpinMc
     const lpinMc = await erc20Token.methods.balanceOf(lockedStake).call();
     const erc20T = await erc20Token.methods.decimals().call();
     const totalinMC = parseInt(lpinMc) / 10 ** parseInt(erc20T);
     console.log("lp in Mc : ",parseFloat(cakePrice)*totalinMC)
     let lpTotalInQuoteToken;
     if(isTokenOnly){
      lpTotalInQuoteToken = new BigNumber(cakePrice).times(new BigNumber(totalinMC))
     }else{
       const lpTokenBalanceMC = await lpToken.methods.balanceOf(lockedStake).call();
       const lpTotalSupply = await lpToken.methods.totalSupply().call();
       const quoteTokenBlanceLP = await quoteToken.methods.balanceOf(lpAddress).call();
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
      lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
      .div(new BigNumber(10).pow(18))
      .times(new BigNumber(2))
      .times(lpTokenRatio)
     }
     const totalValueFormated = lpTotalInQuoteToken
    ? `$${Number(lpTotalInQuoteToken).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'
     setTotal(totalValueFormated.toString())
    const cakeRewardPerBlock = new BigNumber(eggPerBlock || 1).div(new BigNumber(10).pow(18))
    const cakeRewardPerYear = cakeRewardPerBlock.times(new BigNumber(52)); // 52 Weeks for Year

    let totalValue = new BigNumber(lpTotalInQuoteToken || 0);
    
    if (quoteTokenSymbol === QuoteToken.BNB) {
      totalValue = totalValue.times(bnbPrice);
    }

    const apy = (new BigNumber(cakePrice).times(cakeRewardPerYear)).div(totalValue);
  

    const farmAPYs = apy && new BigNumber(apy).times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    const farmAPYss =  apy && new BigNumber(apy).times(new BigNumber(150)).toNumber().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    setfarmAPY(`${farmAPYs.toString()}% ~ ${farmAPYss.toString()}%`)
    setfarmAPR(apy.toString())
    console.log("Farm Apy : ", farmAPYs)
 }

 const onStake = async(value) =>{
   // const val = parseFloat(value)* 10 **parseInt(tokenDecimal)
   console.log("onstake : ",value)
      await Stakes.methods.deposit(value.toString()).send({ from: account })
   .then(async (result) => {
     handleData()

   }).catch(e => {
     console.log("Error ",e)
   })
 }

 const unStake = async(value) =>{
   console.log("Unstake : ",value)
    await Stakes.methods.withdraw(value.toString()).send({ from: account })
 .then(async (result) => {
   handleData()
 }).catch(e => {
   console.log("Error ",e)
 })
}

const claim = async() =>{
    await Stakes.methods.getReward().send({ from: account })
 .then(async (result) => {
   handleData()
 }).catch(e => {
   console.log("Error ",e)
 })
}

const [onPresentDeposit] = useModal(<DepositModal max={new BigNumber(amount)} onConfirm={onStake} tokenName={tokenSymbol} depositFeeBP={parseInt(depositFeeBP)} />)
const [onPresentWithdraw] = useModal(
  <WithdrawModal max={new BigNumber(staked)} onConfirm={unStake} tokenName={tokenSymbol} />,
)
const [onPresentWarning] = useModal(
    <WarningModal max={new BigNumber(staked)} pid={pid} onConfirm={unStake} tokenName={tokenSymbol} />,
  )
 const Approve = async() =>{
   console.log("take")
   let approveToken = null;
   if(!isTokenOnly)
   approveToken = lpToken;
   else
   approveToken = erc20Token;

  

  await approveToken.methods.approve(lockedStake,"115792089237316195423570985008687907853269984665640564039457584007913129639935").send({ from: account })
  .then(async (result) => {
    console.log("result");
    const allownce = await erc20Token.methods.allowance(account,lockedStake).call() / 10 ** 18;
    if((allownce) > 0)
    setAllowance(true);

  }).catch(e => {
    console.log("Error ",e)
  })
}


const handleApproval = ()=>{
  return allowance && parseInt(allowanceValue) >= parseInt(amount) ? (
      <>
   
    </>
  ) : (
    <Button className="btn_yellow" mt="8px" fullWidth disabled={requestedApproval} onClick={Approve}>
      {TranslateString(999, 'Enable Contract')}
    </Button>
  )
}

  return (
      <div className="stake_card">
    <StyledFarmStakingCard className="white_box">
        <div className="card_pos">

      <CardBody>
      <div className="flex_coin flex_coin_grid">
        <div className="flec_coind_div">
          {isTokenOnly ? 
      <Image src={`${process.env.REACT_APP_PUBLIC_URL}/${lpAddress}.png`} width={45} height={45} />:
      <Image src={`${process.env.REACT_APP_PUBLIC_URL}/${lpAddress}.png`} width={45} height={45} />
          }
        </div>
        <div>
        <Text color="color_balck_grey" className="coin_name_title">
        {lpSymbol}
        </Text>
        <div className="percent_div">
          <div className="stake_days">
            {mintPercent}%
          </div>
          </div>
        </div>
      </div>

      <Flex justifyContent='space-between' alignItems='center' className="mb_end mt-top-end">
      <div className="fam_left_txt" color="whiteText">
                    Total Liquidity:
                  </div>
                  <div className="tw-800">{total}</div>
      </Flex>

      <Flex justifyContent='space-between' alignItems='center' className="mb_end mt-top-end">
      <div className="fam_left_txt" color="whiteText">
                    APR Range:
                  </div>
                  <div className="tw-800">{farmAPY}</div>
      </Flex>



      <Flex justifyContent='space-between' alignItems='center' className="mb_end mt-top-end">
      <div className="fam_left_txt" color="whiteText">
                   Earn:
                  </div>
                  <div className="tw-800">VSW</div>
      </Flex>

      
      <Flex justifyContent='space-between' alignItems='center' className="mb_end mt-top-end">
      <div className="fam_left_txt" color="whiteText">
                   Deposit Fee:
                  </div>
                  <div className="tw-800">{parseInt(depositFeeBP)/100}%</div>
      </Flex>

      <Flex justifyContent='space-between' alignItems='center' className="mb_end mt-top-end">
      <div className="fam_left_txt" color="whiteText">
                   Your Boost Factor:
                  </div>
                  <div className="tw-800">
                  <div className="stake_days">
                  {boosFactor}X
                </div>
                  </div>
      </Flex>
{ account && allowance && parseInt(allowanceValue) >= parseInt(amount) ?
      <Action>
      <Flex justifyContent='space-between' alignItems='center' className="mb_end">
<div>
<Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
       
        {tokenSymbol}

          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
           
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px" pr="3px">
        Earned
</Text>
</Flex>
      
        <div className="tw-800 disabled_txt">
        {pending}
        </div>
        </div>
        <div>
        <Button disabled={isClaim} className="btn_yellow" onClick={claim}>
          {TranslateString(999, 'Harvest')}
        </Button>
        </div>
      </Flex>
      
      <Flex justifyContent='space-between' alignItems='center' className="mb_end">
<div>
<Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
       
        {lpSymbol}

          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
           
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px" pr="3px">
        Staked
</Text>
</Flex>
      
        <div className="tw-800 disabled_txt">
          {parseInt(staked)/10**parseInt(lpDecimal)}
       
        </div>
        </div>
        <div className="btn_plus_minus">
          <button onClick={onPresentDeposit} className="btn_yellow mr-1 btn_plus_m" type="button">
               +
           </button>
           <button onClick={onPresentWithdraw} className="btn_yellow btn_plus_m" type="button">
               -
           </button>
          </div>
       
      </Flex>
      
      


    
    </Action>:
    
     
    <div className="mb-btn-stake">
      {!account ?
              <UnlockButton mt="8px" fullWidth className="btn_yellow" />:
            handleApproval() }
              </div>
}

{/*       
       {parseInt(staked) <= 0 ?
       <div className="flex_coin flex_btn_div">
        <div className="flec_coind_div">
        <button onClick={claim} className="btn_yellow" type="button">
               Claim
           </button>
        </div>
        <div>
          <div className="btn_plus_minus">
          <button onClick={onPresentDeposit} className="btn_green_new mr-1" type="button">
               +
           </button>
           <button onClick={onPresentWarning} className="btn_green_new" type="button">
               -
           </button>
          </div>
        </div>
      </div>:
      <div className="mb-btn-stake">
      {!account ?
              <UnlockButton mt="8px" fullWidth className="btn_yellow" />:
            handleApproval() }
              </div>
} */}

      </CardBody>
      </div>
    </StyledFarmStakingCard>


    </div>


  )
}

export default StakingCard
