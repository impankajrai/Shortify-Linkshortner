import styled from 'styled-components';
import Head from 'next/head'
import { Nav, MainSection, Card, BoostLink, CenterHeading, Footer } from '../Components'

const BackgroundChange=styled.div`
  background-color: hsl(230deg 25% 95%);
 `;

export default function Home() {
  return (
    <>
    <Head>
        <title>Shortify-Link Shortner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <MainSection />
      <BackgroundChange>
        <CenterHeading />
        <Card />
        <BoostLink />
      </BackgroundChange>
      <Footer />
    </>
  )
}
