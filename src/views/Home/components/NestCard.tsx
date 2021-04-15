import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import "./FarmhubInfo.css"

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  box-shadow: 0 0 21px 4px rgb(0 0 0 / 45%);
`

const logoStyle = {
  maxWidth: '24px',
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
  maxWidth: '18px',
  maxHeight: '18px'
}

const infoText = {
  display: 'flex',
}

const NestCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px" style={headingStyle}>
          <img src="https://farmhub.community/images/farmhub-logo.png" style={logoStyle} alt="snek" /> Eagle&apos;s Nest
        </Heading>
    	
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default NestCard
