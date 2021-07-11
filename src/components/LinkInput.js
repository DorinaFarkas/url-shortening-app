import React, { useState, useEffect } from 'react'
import { Form, Row, Container, Col, Button } from 'react-bootstrap'
import LinkCard from './LinkCard';

function LinkInput() {
    const [longUrl, setLongUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [finalUrls, setFinalUrls] = useState([]);

    const handleSubmit = () => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`, setIsLoading(true))
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setFinalUrls(() => setFinalUrls([...finalUrls, [longUrl, data.result.full_short_link]]))
                    (localStorage.setItem('finalUrls', finalUrls))
            })
            .catch((error) => console.error(error))
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
            // if (finalUrls !== '') {
            //     (localStorage.setItem('finalUrls', finalUrls))
            // }
        }
    }, []);


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
            {finalUrls && <LinkCard finalUrls={finalUrls} />}
        </>
    )
}

export default LinkInput
