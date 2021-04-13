import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  box-shadow: 0 0 21px 4px rgb(0 0 0 / 45%);
`

const logoStyle = {
  maxWidth: '10%',
}

const headingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const urlStyle = {
  textDecoration: 'underline'
}

const tinyStyle = {
  maxWidth: '18px'
}

const infoText = {
  display: 'flex',

}

const FarmhubInfoCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px" style={headingStyle}>
          <img src="https://farmhub.community/images/farmhub-logo.png" style={logoStyle} alt="snek" /> 
        </Heading>
        <span style={infoText}>Snek.Farm is part of &nbsp;<a href="https://farmhub.community" rel="noreferrer" target="_blank" style={urlStyle}>Farmhub</a></span>
        <br/>
        <span style={infoText}>Convert your &nbsp;<img src="/images/snek/snek.png" style={tinyStyle} alt="snek" />&nbsp;  SNEK into &nbsp; <img src="/images/tokens/busd.png" style={tinyStyle} alt="snek" />&nbsp; BUSD by &nbsp;<a href="https://eagle.farm" rel="noreferrer" target="_blank" style={urlStyle}>feeding the Eagle</a></span>
        <br/>
        <span style={infoText}><a href="https://docs.farmhub.community/farm-hub/eagles-nest" rel="noreferrer" target="_blank" style={urlStyle}>Click here</a>&nbsp; for a more in-depth guide</span>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default FarmhubInfoCard
