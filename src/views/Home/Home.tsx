import React from 'react'
import styled from 'styled-components'
import { Text, BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import Status from './components/state'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const SpecialHeading = styled.div`
  color: #fff;
  font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
// text-shadow: 0 0 10px #fff, 0 0 3px #fff, 0 0 10px #ed582078, 0 0 20px #ff57229c, 0 0 30px #ff572257, 0 0 40px #ff572224, 0 0 50px #ff572287;

    // text-shadow: 0 0 10px #fff, 0 0 3px #fff, 0 0 10px #e600738c, 0 0 20px #e600738c, 0 0 30px #e600738c, 0 0 40px #e600738c, 0 0 50px #e600738c;
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
const ParentHeading = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    margin: auto auto 32px;
    text-align: center;
`

const Home: React.FC = () => {

  return (
    <Page>
      <ParentHeading className="fox_bg align-items-start">
        <SpecialHeading>VENERA SWAP</SpecialHeading>
        <Text>Restoring users faith in BSC network and DeFi with an incentivized revenue sharing</Text>
      </ParentHeading>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        
        </Cards>
        <Text className='stat-head'>Venera Swap Stats</Text>
        <Status />
      </div>
    </Page>
  )
}

export default Home
