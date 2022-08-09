import type { NextPage } from 'next'
//import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { Container, Row, Col, Image } from "react-bootstrap";

import Jumbotron from "../components/Jumbotron";
import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";

const LandingPageContent = () => {
  return (
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron className={"d-flex flex-column justify-content-center align-items-center"}>
                <Image src={"/images/obito-ms.jpeg"} alt={"Obito-MS"} className={`rounded-circle w-25`}/>
                <Container>
                    <h1 className={"text-center mt-4"}>MLB-MD Student Roster</h1>
                </Container>
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
