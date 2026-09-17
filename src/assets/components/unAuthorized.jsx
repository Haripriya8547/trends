import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const unAuthorized = () => {
    const navigate= useNavigate();
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={4}>
                               
                    <Card className="text-center">
                        
                        <Card.Body>
                            <Card.Title className="text-danger display-1">403</Card.Title>
                            <Card.Text>
                               You dont have permission to access this  route 
                            </Card.Text>
                            <Button onClick={()=>Navigate('/')} variant="primary">Go to Home</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default unAuthorized
