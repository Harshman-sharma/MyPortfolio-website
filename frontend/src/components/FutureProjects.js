import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import FutureProject from './FutureProject'

import axios from 'axios'

function FutureProjects() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchProducts() {
            const { data } = await axios.get('/api/futureprojects/')
            setProducts(data)
        }
        fetchProducts()
    }, [])




    return (
        <div>
            <h2>Future Plans/Projects</h2>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={7} lg={5} xl={4}>
                        <FutureProject project={product} />
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default FutureProjects