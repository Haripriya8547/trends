
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./Cards1.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/productSlice";

function Cards1({ products = [] }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <Container className="mt-3">
            <Row>
                {products.map((product, i) => (
                    <Col
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className="d-flex mb-4"
                        key={product.id || i}
                    >
                        <Card className="product-card w-100">

                            <Link to={`/product/${product.id}`}>
                                <Image
                                    src={product.productImage}
                                    alt={product.productName}
                                    fluid
                                />
                            </Link>

                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold">
                                    {product.productName}
                                </Card.Title>

                                <Card.Text>
                                    {product.productDiscripption}
                                </Card.Text>

                                <h5>₹{product.productPrice}</h5>

                                <Button
                                    variant="primary"
                                    className="mt-auto"
                                    onClick={() => handleAddToCart(product)}
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