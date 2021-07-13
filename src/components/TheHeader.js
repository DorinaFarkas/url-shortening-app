import React, { } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import TheNavbar from './TheNavbar'
import headerimg from '../assets/illustration-working.svg'

function TheHeader() {
    const focusOnInput = () => {
        const inputElement = document.querySelector('#input')
        inputElement.focus()
    }
    
    return (
        <>
            <TheNavbar />
            <Container>
                <Row>
                    <Col lg="5" className="mt-auto mb-auto">
                        <h1>
                            More than just shorter Links
                        </h1>
                        <h5>
                            Buid your brand's recognition and get detailed insights on how your links are perfoming.
                        </h5>
                        <Button onClick={() => {focusOnInput()}}>Get started</Button>
                    </Col>
                    <Col lg="6"><img src={headerimg} alt="working-woman"></img></Col>
                </Row>
            </Container>
        </>
    )
}

export default TheHeader
