import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import FarmhubInfoCard from './components/FarmhubInfoCard'
import NestCard from './components/NestCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/mouse/3.png');
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
    background-image: url('/images/mouse/3.png'), url('/images/mouse/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 12;
    width: 100%;
    box-shadow: 0 0 21px 4px rgb(0 0 0 / 45%);
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`
const logoStyle = {
  maxWidth: '50%',
  marginTop: '2.5rem',
}

const heroStyle = {
  marginTop: '3vh'
}

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <NestCard />
      <Hero style={heroStyle}>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          <img style={logoStyle} src="https://snek.farm/images/backgrounds/snek-logo.png" alt="Snek farm" />
        </Heading>
      </Hero>
      <div>
        <Cards>
          
          <FarmStakingCard />
          <CakeStats />
          <TotalValueLockedCard />
          <TwitterCard/>
        </Cards>
      </div>
    </Page>
  )
}

export default Home
