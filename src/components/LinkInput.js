import React, { useState } from 'react'
import { Form, Row, Container, Col, Button, Card } from 'react-bootstrap'

function LinkInput() {
    const [longUrl, setLongUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [finalUrls, setFinalUrls] = useState([]);

    const handleSubmit = () => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`, setIsLoading(true))
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setFinalUrls(() => setFinalUrls([...finalUrls, [longUrl, data.result.full_short_link]]));
            })
            .catch((error) => console.error(error))
    }

    const copyLink = (index) => {
        console.log(finalUrls[index][1]);
        navigator.clipboard.writeText(finalUrls[index][1]);
    }

    return (
        <>
            <Container className="linkInput">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg="10">
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="url"
                                    placeholder="Shorten a link here..."
                                    onChange={e => setLongUrl(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            {!isLoading && <Button onClick={handleSubmit}>Shorten it!</Button>}
                            {isLoading && <Button disabled>Loading ...</Button>}
                        </Col>
                    </Row>
                </Form>
            </Container>
            {finalUrls ?
                <Container className="pt-5">
                    {finalUrls ? finalUrls.map((item, index) =>
                        < Card key={index} className="mt-5 mb-5">
                            <Card.Body>
                                <Row>
                                    <Col lg={5}>{item[0]}</Col>
                                    <Col className="text-right" lg={5}>{item[1]}</Col>
                                    <Button onClick={() => copyLink(index)}>Copy</Button>
                                </Row>
                            </Card.Body>
                        </Card>
                        ) : ''
                    }
                </Container>
                : ''
            }
        </>
    )
}

export default LinkInput
