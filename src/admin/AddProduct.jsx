import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from "react-bootstrap";
import { userRegister } from "../redux/userSlice";
import { useDispatch } from "react-redux";


function AddProduct() {
    const { Formik } = formik;
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        productName: yup.string().required("please enter productName"),
        productpPrice: yup.number().required("please enter productPrice"),
        productDiscription: yup.string().required("please enter productDiscription"),
         productPhoto: yup.string().required("please add product photo"),

    });
    const handleRegister = (values) => {
        values.id = Date.now();
        values.role = "user";
        values.status = true;
        // console.log("values----->",values);        
       dispatch( userRegister(values));

    }



    return (
        <Container>
            <Row >
                <Col>
                    <h2>Add Product</h2>
                </Col>
            </Row>
            <Row md={4} className="m-3 justify-content-center">
                <Col>
                    <Formik
                        validationSchema={schema}
                        onSubmit={handleRegister}
                        initialValues={{
                            productName: '',
                            productPrice: '0',
                            productDiscription: '',
                            productPhoto:''

                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mt-2 mb-2">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control

                                            type="Text"
                                            placeholder="ProductName"
                                            name="productName"
                                            onChange={handleChange}
                                            value={values.fullname}
                                            isValid={touched.ProductName && !errors.ProductName}
                                            isInvalid={touched.ProductName && !!errors.ProductName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.ProductName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mt-2 mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Product Price</Form.Label>
                                        <Form.Control

                                            type="number"
                                            placeholder="ProductPrice"
                                            name="productPrice"
                                            onChange={handleChange}
                                            value={values.productPrice}
                                            isValid={touched.productPrice && !errors.productPrice}
                                            isInvalid={touched.productPrice && !!errors.productPrice}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.productPrice}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className=" mb-3">
                                    <Form.Group as={Col} controlId="validationCustom05">
                                        <Form.Label>product Discription</Form.Label>
                                        <Form.Control
                                            type="productDiscription"
                                            placeholder="ProductDiscription"
                                            name="productDiscription"
                                            onChange={handleChange}
                                            value={values.productDiscription}
                                            isValid={touched.productDiscription && !errors.productDiscription}
                                            isInvalid={touched.productDiscription && !!errors.productDiscription}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.productDiscription}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <div>
                                    <Button type="submit" variant="success">
                                        Register
                                    </Button>
                                </div>
                                <Link to="/login"> Already have an account? Login here! </Link>
                            </Form>
                        )}

                    </Formik>
                </Col>
            </Row>


        </Container>
    );
}

export default AddProduct;