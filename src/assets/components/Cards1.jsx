import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./Cards1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cards1({ products }) {

    const [cartCount, setCartCount] = useState(0);
    // const handleCartCountIncrement = () => {
    //     console.log("Inside handleCartCountIncrement--------->");
    // };
    function handleCartCountIncrement() {
        // cartCount++; 
        setCartCount(cartCount + 1);
    }
    console.log("cartCount-------->", cartCount);

    return (
        <Container className="mt-3">
            <Row>
                {products.map((product, i) => (
                    <Col
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className="d-flex"
                        key={i}
                    >
                        <Card className="product-card">

                            <h2>Count: {cartCount}</h2>

                            <Link to={`/product/${product.id}`}>
                                <Image src={product.productImage} />
                            </Link>

                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold">
                                    {product.productName}
                                </Card.Title>

                                <Card.Text>
                                    {product.productDiscripption}
                                </Card.Text>

                                <Button
                                    variant="primary"
                                    className="mt-auto"
                                    onClick={handleCartCountIncrement}
                                >
                                    Add to cart
                                </Button>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cards1;