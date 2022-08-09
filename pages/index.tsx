import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { Container, Row, Col } from "react-bootstrap";

import Jumbotron from "../components/Jumbotron";
import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";

const LandingPageContent = () => {
  return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
                <h1>Hello, World!</h1>
                <Image src={"/images/obito-ms.jpeg"} alt={"Obito-MS"} width={300} height={300}/>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
  )
}

const LandingPage = () => {
  return (
      <>
          <Metadata/>
          <Navigation/>
          <LandingPageContent/>
      </>
  )
}

export default LandingPage;
