import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FutureProject({ project }) {
    return (
        <Card className="rounded">
            <Link to={`/futureproject/${project._id}`}>


                <div className="mx-3">
                    <Card.Body>
                        <Link to={`/futureproject/${project._id}`}>
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
export default FutureProject