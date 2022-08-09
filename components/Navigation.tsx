import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
    return (
        <Navbar
            bg={"maxpurple"}
            expand={"lg"}
            className={"w-100 mb-3 sticky-top px-3"}
        >
            <Navbar.Brand>JC</Navbar.Brand>
            <Navbar.Toggle aria-controls={"navigation-nav"} />
            <Navbar.Collapse id={"navigation-nav"}>
                <Nav className={"ms-auto text-center"}>
                    <Nav.Link
                        href={"https://open.spotify.com/artist/6Av6GMCOznZIlHuNcBWgf4"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Spotify
                    </Nav.Link>

                    <Nav.Link
                        href={"https://soundcloud.com/JAYCRITCH"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        SoundCloud
                    </Nav.Link>

                    <Nav.Link
                        href={"https://music.apple.com/us/artist/jay-critch/1180942034"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Apple Music
                    </Nav.Link>

                    <Nav.Link
                        href={"https://www.talkmoneytme.net/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Talk Money Shop
                    </Nav.Link>

                    <Nav.Link
                        href={"/api/about"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Extra
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;