import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => (
    <Navbar bg={"maxpurple"} className={"justify-content-center"}>
        <Nav>
            <Nav.Link
                href={"https://www.deybyr647.com"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
                &copy; 2022 | Deyby Rodriguez
            </Nav.Link>
        </Nav>
    </Navbar>
);

export default Footer;