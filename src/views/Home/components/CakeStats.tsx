import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const snekPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = snekPrice.times(circSupply);

  let snekPerBlock = 0;
  if(farms && farms[0] && farms[0].snekPerBlock){
    snekPerBlock = new BigNumber(farms[0].snekPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  const logoStyle = {
    maxWidth: '5%',
    marginRight: '12px'
  }

  const txtCenter = {
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading style={txtCenter} size="xl" mb="24px">
          <img src="https://snek.farm/images/snek/snek.png" style={logoStyle} alt="snek" />
          {TranslateString(534, '🐍 Snek Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">🖇️ {TranslateString(536, 'Total Snek Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">📈 {TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">🔥 {TranslateString(538, 'Total Snek Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={2} />
        </Row>
        <Row>
          <Text fontSize="14px">🐣 {TranslateString(540, 'New Snek/block')}</Text>
          <Text bold fontSize="14px">{snekPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
