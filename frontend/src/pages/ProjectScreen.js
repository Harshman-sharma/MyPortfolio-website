import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'

import axios from 'axios'

function ProjectScreen() {
  const { id } = useParams();
  const [project, setProject] = useState([])

    useEffect(() => {

        async function fetchProject(){
            const {data} = await axios.get(`/api/projects/${id}`)
            setProject(data)
        }      
        fetchProject()  
    }, [])
  
  
  return (
    <div className='mx-1'>

      <Link to='/' className="btn btn-light my-3">Go Back</Link>
      
      <Row>
        <Col md={4}>
          <Image src={project.image} alt={project.title} fluid />
        </Col>


        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{project.title}</h1>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4 className='my-3'>Project Category : </h4>
              <h5 className='my-3'>{project.category}</h5>
            </ListGroup.Item>

            <ListGroup.Item>
            <h4 className='my-3'>Requirements : </h4>
              <div className='my-3'>{project.requirements}</div>
            </ListGroup.Item>

            <ListGroup.Item>
            <h4 className='my-3'>Languages Used : </h4>
            <p className='my-3'>{project.Languages}</p>
            <br />
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
                  <Col>Started On: </Col>
                  <Col>
                    <strong>{project.workedFrom}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Ended On:</Col>
                  <Col>
                    {project.workedTo}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <div className="but">
                <a href = {`${project.githubLink}`}>
                <Button className='btn-block' disabled={project.countInStock==0} type='button' >Go To Github Repo</Button>
                </a>
                </div>
              </ListGroup.Item>

            </ListGroup>
          </Card>

        </Col>

      </Row>

    </div>
  )
}

export default ProjectScreen