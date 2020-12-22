import React, { useState, useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "../utils/Axios";

import Rating from "../components/Rating";

// import products from "../products";

const ProductScreen = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await Axios.get(`products/${props.match.params.id}`);
            setProduct(response.data);
        }
        fetchProduct();
    }, []);


    //console.log(props)
    //const product = products.find(p => p._id === props.match.params.id);

    console.log(product);
    if (!product) {
        return null;
    }
    return (
        <>
            <Link to="/" className="btn btn-light" >Back to Home</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} numOfReviews={product.numReviews} />
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Price:<strong className="p-2">${product.price}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Description:{product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price</Col>
                                    <Col>${product.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>



                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen;
