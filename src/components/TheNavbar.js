import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'

function TheNavbar() {
    return (
        <>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand>Shortly</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>
                                Features
                            </Nav.Link>
                            <Nav.Link>
                                Priceing
                            </Nav.Link>
                            <Nav.Link>
                                Resources
                            </Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link>
                                    Login
                                </Nav.Link>
                            </Nav>
                            <Button>
                                Sign Up
                            </Button>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TheNavbar
