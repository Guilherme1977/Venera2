import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button,BaseLayout } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd, useTotalValue } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'
import CardValue from './CardValue'


const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
//   margin-bottom: 48px;


  & > div {
    grid-column: span 3;
    width: 100%;
    background : transparent
  }
  @media(max-width:990px){
    & > div {
      grid-column: span 4;
    }
  }
  @media(max-width:575px){
    & > div {
      grid-column: span 3;
    }
    .satus h1 {
      font-size: 38px;
    }
    .p-5{
      padding:10px
    }
  }
  `

const StyledFarmStakingCard = styled(Card)`
  // background-image: url('/images/quam/home-box-bg.png');
  // background-repeat: no-repeat;
  // background-position: top right;
  // min-height: 376px;

`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const Status = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const quamPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = quamPrice.times(circSupply);
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const allEarnings = useAllEarnings()
  const totalValue = useTotalValue();
  const tvl = totalValue.toFixed(2);
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard className='bordbox satus'>
        <Cards className='p-5'>
            <Card className='p-5'>
                 <h1>${Number.isNaN(quamPrice.toNumber()) ? 0: quamPrice.toNumber().toFixed(2)}</h1>
                 <p>VSW Price</p>
            </Card>
            <Card className='p-5'>
            <h1>${Number.isNaN(tvl) ? 0 : tvl}</h1>
            <p>Total value Locked</p>
            </Card>
            <Card className='p-5'>
            <h1>{Number.isNaN(getBalanceNumber(marketCap)) ? 0 :getBalanceNumber(marketCap) }+</h1>
            <p>Market cap</p>
            </Card>
            <Card className='p-5'>
            <h1>{Number.isNaN(getBalanceNumber(circSupply)) ? 0 :getBalanceNumber(circSupply) }</h1>
            <p>Circulating vsw</p>
            </Card>
        </Cards>
      
    </StyledFarmStakingCard>
  )
}

export default Status
