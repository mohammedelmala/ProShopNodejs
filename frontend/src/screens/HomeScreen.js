import React from 'react';
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
    return (
        <Row>
            {products.map(product => {
                return (
                    <Col sm={12} md={6} lg={4} key={product._id} >
                        <Product product={product} />
                    </Col>
                )
            })
            }

        </Row>
    )
}

export default HomeScreen