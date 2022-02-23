import axios from 'axios'
import { Col, Image, ListGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

function Certificates() {
    const [cert, setCert] = useState([])

    useEffect(() => {

        async function fetchInfo() {
            const { data } = await axios.get(`/api/certificates/1`)
            setCert(data)
        }
        fetchInfo()
    }, [])


    return (


        <Col>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h1>Online Certifications</h1>
                </ListGroup.Item>

                <ListGroup.Item>
                <Image src={cert.cert1} fluid />       
                </ListGroup.Item>

                <ListGroup.Item>
                <Image src={cert.cert2} fluid />
                </ListGroup.Item>
            </ListGroup>
        </Col>

    )
}

export default Certificates