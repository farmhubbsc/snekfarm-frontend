import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import useGetAccumulatingNest from '../../../hooks/useGetAccumulatingNest'
import useGetAccumulatingNestAddr from '../../../hooks/useGetAccumulatingNestAddr'
import useGetNestBusd from '../../../hooks/useGetNestBusd'
import CardValue from './CardValue'
import './FarmhubInfo.css'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  box-shadow: 0 0 21px 4px rgb(0 0 0 / 45%);
`

const logoStyle = {
  maxWidth: '0%',
}

const headingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const urlStyle = {
  textDecoration: 'underline',
}

const tinyStyle = {
  maxWidth: '18px',
  maxHeight: '18px',
}

const infoText = {
  display: 'flex',
}

const NestCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  let currentNest = useGetAccumulatingNest()
  const currentNestAddr = useGetAccumulatingNestAddr()
  // Subtract the first unused nests
  currentNest -= 5
  if (currentNest <= 0) {
    currentNest = 0
  }
  const currentNestBUSD = useGetNestBusd(currentNestAddr) / 1000000000000000000
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <div className="nest-card">
          <div className="nest-header">
            <img src="https://farmhub.community/images/nest-eagle-busd.png" style={logoStyle} alt="snek" />
            <span className="nest-number"><CardValue value={currentNest} prefix="Nest " decimals={0} /></span>
          </div>
          <CardValue value={currentNestBUSD} prefix="$" decimals={2} />
          <div className="nest-cta">
            <a href="https://eaglenest.finance" className="visit-nest-btn" target="_blank" rel="noreferrer">Visit the nest!</a>
          </div>
        </div>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default NestCard
