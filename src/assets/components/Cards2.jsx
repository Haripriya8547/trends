import "./cards2.css"
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

function Cards2({ books }) {
  return (
    <Container className="mt-3">
      <Row>
        <h2>BOOKS</h2>
        {books.map((book) => (
          <Col sm={12}  md={6} lg={4} xl={3} className="d-flex"  key={book.id}>

            <Card className="product-card">
              
              <Image src={book.bookPhoto} />

              <Card.Body className="d-flex flex-column">
                
                <Card.Title className="fw-bold">
                  {book.bookName}
                </Card.Title>

                <Card.Text>
                  {book.bookDiscription}
                </Card.Text>

                <Card.Text>
                  ₹{book.bookPrice}
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

export default Cards2;

