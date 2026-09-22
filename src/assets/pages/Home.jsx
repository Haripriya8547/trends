
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HomeCarousel from "../components/HomeCarousel";
import Card from "../components/Card";

function Home({ handleCartCountIncrement }) {

    const { products } = useSelector(
        (state) => state.productState
    );

    return (
        <>
            <HomeCarousel />

            <Container>
                <Row>
                    {products.map((product, i) => (
                        <Col md={4} key={product.id || i} >
                            <Card
                                product={product}
                                handleCartCountIncrement={
                                    handleCartCountIncrement
                                }
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Home;