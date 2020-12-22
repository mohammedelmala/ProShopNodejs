import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import Axios from "../utils/Axios";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await Axios.get("products");
            setProducts(response.data);
        }

        fetchProducts();
    }, [])
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
