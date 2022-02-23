import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Card } from 'react-bootstrap'

import axios from 'axios'

function ProjectScreen() {
  const { id } = useParams();
  const [project, setProject] = useState([])

    useEffect(() => {

        async function fetchProject(){
            const {data} = await axios.get(`/api/futureprojects/${id}`)
            setProject(data)
        }      
        fetchProject()  
    }, [])
  
  
  return (
    <div className='mx-1'>

      <Link to='/' className="btn btn-light my-3">Go Back</Link>
      
      <Row>

        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{project.title}</h1>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4 className='my-3'>Project/Plan Category : </h4>
              <h5 className='my-3'>{project.category}</h5>
            </ListGroup.Item>

            <ListGroup.Item>
            <h4 className='my-3'>Estimated Requirements :</h4>
              <div className='my-3'>{project.requirements}</div>
            </ListGroup.Item>

            <ListGroup.Item>
            <h4 className='my-3'>AIM : </h4>
              <div className='my-3'>{project.aim}</div>
            </ListGroup.Item>

            <ListGroup.Item>
            <h4 className='my-3'>Description </h4>
            <p className='my-3'>{project.description}</p>
            <br />
            </ListGroup.Item>

          </ListGroup>
        </Col>


        <Col md={3}>

          <Card>
            <ListGroup variant='flush'>


            <ListGroup.Item>
                <Row>
                  <Col>Project Category</Col>
                  <Col>
                    {project.category}
                  </Col>
                </Row>
              </ListGroup.Item>


              <ListGroup.Item>
                <Row>
                  <Col>Estimated Requirements </Col>
                  <Col>
                    <strong>{project.requirements}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

            </ListGroup>
          </Card>

        </Col>

      </Row>

    </div>
  )
}

export default ProjectScreen