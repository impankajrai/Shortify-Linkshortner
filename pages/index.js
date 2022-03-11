import styled from 'styled-components';
import { Nav, MainSection, Card, BoostLink, CenterHeading, Footer } from '../Components'

const BackgroundChange=styled.div`
  background-color: hsl(230deg 25% 95%);
 `;

export default function Home() {
  return (
    <>
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
