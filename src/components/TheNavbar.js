import React, { useState } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'

function TheNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false) 
    const [isSignedUp, setIsSignedUp] = useState(false) 
    const toggleIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    const toggleIsSignedUp = (e) => {
        e.preventDefault()
        setIsSignedUp(!isSignedUp)
    }
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
                                <Nav.Link onClick={toggleIsLoggedIn}>
                                   {isLoggedIn ? 'Logged in' : 'Login' } 
                                </Nav.Link>
                            </Nav>
                            <Button onClick={toggleIsSignedUp}>
                            {isSignedUp ? 'Signed Up' : 'Sign Up' }
                            </Button>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TheNavbar
