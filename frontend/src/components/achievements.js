import axios from 'axios'
import { Col, ListGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

function Achievements() {
    const [achieve, setAchieve] = useState([])

    useEffect(() => {

        async function fetchInfo() {
            const { data } = await axios.get(`/api/achievements/1`)
            setAchieve(data)
        }
        fetchInfo()
    }, [])


    return (


        <Col>
            <ListGroup variant="flush">

                <ListGroup.Item>
                    <h2>Achievements</h2>
                </ListGroup.Item>

                <ListGroup.Item>
                    
                    <h5 className='my-3'>{achieve.achievement1}</h5>
                </ListGroup.Item>

                <ListGroup.Item>
                    
                    <h5 className='my-3'>{achieve.achievement2}</h5>
                </ListGroup.Item>

                <ListGroup.Item>
                    
                    <h5 className='my-3'>{achieve.achievement3}</h5>
                </ListGroup.Item>

            </ListGroup>
        </Col>

    )
}

export default Achievements