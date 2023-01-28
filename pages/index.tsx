import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Jumbotron from "../components/Jumbotron";
import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import NinjaCardContainer from "../components/Ninja/NinjaCardContainer";
import Footer from "../components/Footer";

const LandingPageContent = () => {
  return (
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron className={"d-flex flex-column justify-content-center align-items-center bg-ceruleanFrost"}>
                <Image src={"/images/konoha.jpg"} alt={"Obito-MS"} className={`rounded-circle w-25`}/>
                <Container>
                    <h1 className={"text-center mt-4"}>Ninjas of Konohagakure</h1>
                </Container>
            </Jumbotron>
          </Col>
        </Row>

          <Row>
              <Col>
                  <NinjaCardContainer/>
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
          <Footer/>
      </>
  )
}

export default LandingPage;
