import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Project({ project }) {
    return (
        <Card className="rounded">
            <Link to={`/project/${project._id}`}>
                <Card.Img src={project.image} />


                <div className="mx-3">
                    <Card.Body>
                        <Link to={`/project/${project._id}`}>
                            <Card.Title as='div'>
                                <h4>{project.title}</h4>
                            </Card.Title>
                        </Link>
                    </Card.Body>
                </div>

                <div className="mx-4">
                    <Card.Text as='div'>
                        {project.category}
                    </Card.Text>
                    <br />
                    <Card.Text as='h5'>
                        {project.requirements}
                        <br /><br />
                    </Card.Text>
                </div>
            </Link>
        </Card>
    )
}
export default Project