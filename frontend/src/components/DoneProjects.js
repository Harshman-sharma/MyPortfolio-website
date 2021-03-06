import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Project from './Project'

import axios from 'axios'

function DoneProjects() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchProducts() {
            const { data } = await axios.get('/api/projects/')
            setProducts(data)
        }
        fetchProducts()
    }, [])




    return (
        <div>
            <h2>Projects Made Till Now</h2>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={11} md={7} lg={6} xl={4}>
                        <Project project={product} />
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default DoneProjects