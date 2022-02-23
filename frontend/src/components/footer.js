import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">MyPortfolio : Harsh Kumar</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="text-center py-3">Frontend : React JS</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="text-center py-3">Backend : Django</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer