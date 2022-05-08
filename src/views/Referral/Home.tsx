import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout,Input,Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import staking from 'config/constants/staking'
import StakingCard from 'views/Staking/components/StakingCard'
import  {useTotalCommisions, useTotalReferral, useReferrals} from 'hooks/useTokenBalance'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import UnlockButton from 'components/UnlockButton'
import { getBalanceNumber } from 'utils/formatBalance'

import { useTotalValue } from '../../state/hooks'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/egg/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/home.png'), url('/images/home.png');
    // background-position: left center, right center;
    // height: 300px;
    // padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const CardsLarge = styled(BaseLayout)`
  align-items: stretch;
  justify-self: center;
  margin-bottom: 32px;

  & > div {
    grid-column: span 12;
    width: 100%;
    text-align: center;

  }
`

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID
const REFERRAL_LINK = window.location.origin;
console.log("Chain Id L: ", CHAIN_ID)

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue();
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const tvl = totalValue.toFixed(2);
  const reflink = `${REFERRAL_LINK}?ref=${account}`
  const gettotalCommission = useTotalCommisions(account)
  const childreferral = useTotalReferral(account)
  const parentAddresss = useReferrals(account)
  const totalrefVal = getBalanceNumber(gettotalCommission)
  return (
    <Page>
      <Hero  className="banner_home_locked">
      
        <Heading as="h3" className="dash_heading_1">Referral</Heading>        
      
      </Hero>
      <div>
      
        <p className="referal_txt mt-4">Share the referral link below to invite your friends and earn 10% of your friends earnings FOREVER!</p>
        <div className="ref">
      
      {!account ?
      <>
            <div className="unlock_btn">
              <UnlockButton mt="8px" fullWidth className="btn_yellow" />
              </div>
               <p className="unlock_desc">Unlock wallet to get your unique referral link</p>
               </>: <div className="referal_expand">
              <p className="unlock_desc mb-3">Your Referral Link</p>
              
              <Input className="input_ref mb-3" value={reflink}/>
             <div className="text-center">
             <CopyToClipboard  Tooltip={{ title: "Copied!" }} text={reflink}>
              <Button type="button" className="btn_yellow mb-3">Copy</Button>
              </CopyToClipboard>
              </div>
              <div className="text-center">
              <p className="unlock_desc">Your Referrals</p>
                <p className="referal_txt">{childreferral}</p>

                <p className="unlock_desc">Your Referral Commissions</p>
                <p className="referal_txt">{totalrefVal}</p>


              </div>
              </div>
            }
             
             
              </div>
             
      </div>
    </Page>
  )
}

export default Home
