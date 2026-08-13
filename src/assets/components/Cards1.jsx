import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./Cards1.css"

function Cards1({ products }) {


    return (
        <Container className="mt-3">
            <Row>
                <h2>TOYS</h2>
                {products.map((product, i) => (
                    <Col sm={12} md={6} lg={4} xl={3} className="d-flex" key={i}>
                        <Card className="product-card">
                            <Image src={product. productImage} />

                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold">{product.productName}</Card.Title>

                                <Card.Text>
                                    {product.productDiscripption}
                                </Card.Text>

                                <Button variant="primary" className="mt-auto">
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