import React, { useState, useEffect, useRef } from 'react'
import { Form, Row, Container, Col, Button } from 'react-bootstrap'
import LinkCard from './LinkCard';

function LinkInput() {
    const [finalUrls, setFinalUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const input = useRef('')

    const handleSubmit = (e) => {
        isValidated();
        if (validated) {
            fetch(`https://api.shrtco.de/v2/shorten?url=${input.current.value}`, setIsLoading(true))
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setFinalUrls(() => setFinalUrls([...finalUrls, [input.current.value, data.result.full_short_link]]));
                localStorage.setItem('finalUrls', [...finalUrls, [input.current.value, data.result.full_short_link]]);
                input.current.value = '';
                setValidated(true);
            })
            .catch((error) => console.error(error))
        }
    }

    const isValidated = () => {
        if (input.current.value) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('finalUrls')) {
            const urls = localStorage.getItem('finalUrls').split(',');
            let urlList = [];
            let i, j, temporary, chunk = 2;
            for (i = 0, j = urls.length; i < j; i += chunk) {
                temporary = urls.slice(i, i + chunk);
                urlList.push(temporary)
            }
            setFinalUrls(urlList);
        }
    }, []);

    return (
        <>
            <Container className="linkInput">
                <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                    <Row>
                        <Col lg="10">
                            <Form.Group>
                                <Form.Control
                                    required
                                    type="url"
                                    placeholder="Shorten a link here..."
                                    onChange={e => { isValidated() }}
                                    id="input"
                                    isValid={validated}
                                    ref={input}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please add a link.
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
            {finalUrls && <LinkCard finalUrls={finalUrls} />}
        </>
    )
}

export default LinkInput
