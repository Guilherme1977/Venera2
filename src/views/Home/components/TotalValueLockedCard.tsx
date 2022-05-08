import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text,Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`
const HeadingWithoutColor = styled(Card)`
  font-size: 24px
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard className='bordbox'>
      <CardBody>
          <HeadingWithoutColor className='without_bg_header'>
              {TranslateString(999, 'Total Value Locked (TVL)')}
          </HeadingWithoutColor>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          <Heading size="xl" className="tvl_text_color">
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
          </Heading>
          <Text color="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
