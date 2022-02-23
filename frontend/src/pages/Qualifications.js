import axios from 'axios'
import { Col, Image, ListGroup} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

function Qualifications() {
    const [qual, setQual] = useState([])

    useEffect(() => {

        async function fetchInfo() {
            const { data } = await axios.get(`/api/qualifications/1`)
            setQual(data)
        }
        fetchInfo()
    }, [])


    return (


        <Col>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h1>QUALIFICATIONS</h1>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h4 className='my-3'>Class 10 :  </h4>
                    <Image src={qual.class10} fluid />
                </ListGroup.Item>

                <ListGroup.Item>
                    <h4 className='my-3'>Class 12 :</h4>
                    <Image src={qual.class12} fluid />
                </ListGroup.Item>
            </ListGroup>
        </Col>

    )
}

export default Qualifications