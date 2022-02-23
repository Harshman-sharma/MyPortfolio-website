
import axios from 'axios'
import { Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

function Myinfo() {
    const [info, setInfo] = useState([])

    useEffect(() => {

        async function fetchInfo() {
            const { data } = await axios.get(`/api/userinfo/1`)
            setInfo(data)
        }
        fetchInfo()
    }, [])
    return (
        <Col>

            <Row>


                <Col md={6}>
                    <ListGroup variant="flush" >
                        <ListGroup.Item>
                            <h1>{info.name}</h1>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4 className='my-3'>Residence : </h4>
                            <p className='my-3'>{info.residence}</p>
                            
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4 className='my-3'>Email ID:  </h4>
                            <h5 className='my-3'>{info.email}</h5>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4 className='my-3'>Schooling from : </h4>
                            <p className='my-3'>{info.school}</p>
                            
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4 className='my-3'>About Me :</h4>
                            <div className='my-3'>{info.aboutMe}</div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4 className='my-3'>Interests : </h4>
                            <div className='my-3'>{info.interests}</div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4 className='my-3'>Highest Qualification : </h4>
                            <p className='my-3'>{info.maxQual}</p>
                            <br />
                        </ListGroup.Item>


                    </ListGroup>
                </Col>

<Col md={2}></Col>
                <Col md={4}>

                    <ListGroup.Item>
                        <Image src={info.profile_img} alt={info.name} fluid />
                    </ListGroup.Item>
                </Col>



            </Row>


            <Row >
                <marquee scrollamount="10"><h4>Let's get in touch</h4></marquee>
                <Col >
                    <a href={`${info.linkedin}`}>
                        <Button className='btn-block' type='button' >LinkedIn</Button>
                    </a>
                </Col><Col>
                    <a href={`${info.twitter}`}>
                        <Button className='btn-block' type='button' >Twitter</Button>
                    </a>
                </Col><Col>
                    <a href={`${info.insta}`}>
                        <Button className='btn-block' type='button' >Instagram</Button>
                    </a>
                </Col><Col>
                    <a href={`${info.fb}`}>
                        <Button className='btn-block' type='button' >Facebook</Button>
                    </a>
                </Col>
            </Row>


        </Col>
    )
}

export default Myinfo