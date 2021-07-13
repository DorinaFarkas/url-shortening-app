import React, {  } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

function LinkCard({ finalUrls }) {

    const copyLink = (e, index) => {
        navigator.clipboard.writeText(finalUrls[index][1]);
        e.target.innerHTML = 'Copied!';
    }
    return (
        <Container className="pt-5">
            {finalUrls ? finalUrls.map((item, index) =>
                < Card key={index} className="mt-5 mb-5">
                    <Card.Body>
                        <Row>
                            <Col lg={6}>{item[0]}</Col>
                            <Col className="text-right" lg={4}>{item[1]}</Col>
                            <Col className="text-right" lg={2}>
                                <Button id={`btn${index}`} onClick={(e) => copyLink(e, index)} >Copy</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ) : ''
            }
        </Container>
    )
}

export default LinkCard
