import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import ModalForm from "./Ninja/NewNinjaForm";

const Navigation = () => {
    return (
        <Navbar
            bg={"spaceCadet"}
            expand={"lg"}
            className={"w-100 mb-3 sticky-top px-3"}
        >
            <Navbar.Brand>
                <Image alt={"logo"} width={50} src={"/images/obito-ms.jpeg"} className={"rounded-circle"}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={"navigation-nav"} />
            <Navbar.Collapse id={"navigation-nav"}>
                <Nav className={"ms-auto text-center"}>
                    <Nav.Link
                        href={"https://github.com/deybyr647/MLB-MD-firebase-demo"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={`text-ghostWhite`}
                    >
                        GitHub
                    </Nav.Link>

                    <Nav.Link
                        href={"/api/ninjas"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={`text-ghostWhite`}
                    >
                        API
                    </Nav.Link>

                    <ModalForm/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;