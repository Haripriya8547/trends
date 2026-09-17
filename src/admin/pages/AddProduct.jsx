import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import { Container } from "react-bootstrap";
import { addProduct } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function AddProduct() {
    const { Formik } = formik;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const schema = yup.object().shape({
        productName: yup
            .string()
            .required("Please enter product name"),

        productPrice: yup
            .number()
            .required("Please enter product price"),

        productDescription: yup
            .string()
            .required("Please enter product description"),

        productPhoto: yup
            .string()
            .required("Please add product photo"),
    });

    const handleAddProduct = (values) => {
        const product = {
            ...values,
            id: Date.now(),
        };

        dispatch(addProduct(product));

        toast.success("Product added successfully!");

        navigate("/admin/list-product");
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Add Product</h2>
                </Col>
            </Row>

            <Row md={4} className="m-3 justify-content-center">
                <Col>
                    <Formik
                        validationSchema={schema}
                        onSubmit={handleAddProduct}
                        initialValues={{
                            productName: "",
                            productPrice: "",
                            productDescription: "",
                            productPhoto: "",
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            touched,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>

                                {/* Product Name */}
                                <Row className="mt-2 mb-2">
                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            Product Name
                                        </Form.Label>

                                        <Form.Control
                                            type="text"
                                            placeholder="Product Name"
                                            name="productName"
                                            onChange={handleChange}
                                            value={values.productName}
                                            isValid={
                                                touched.productName &&
                                                !errors.productName
                                            }
                                            isInvalid={
                                                touched.productName &&
                                                !!errors.productName
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.productName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* Product Price */}
                                <Row className="mt-2 mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            Product Price
                                        </Form.Label>

                                        <Form.Control
                                            type="number"
                                            placeholder="Product Price"
                                            name="productPrice"
                                            onChange={handleChange}
                                            value={values.productPrice}
                                            isValid={
                                                touched.productPrice &&
                                                !errors.productPrice
                                            }
                                            isInvalid={
                                                touched.productPrice &&
                                                !!errors.productPrice
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.productPrice}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* Product Description */}
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            Product Description
                                        </Form.Label>

                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Product Description"
                                            name="productDescription"
                                            onChange={handleChange}
                                            value={values.productDescription}
                                            isValid={
                                                touched.productDescription &&
                                                !errors.productDescription
                                            }
                                            isInvalid={
                                                touched.productDescription &&
                                                !!errors.productDescription
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.productDescription}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* Product Photo */}
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            Product Photo
                                        </Form.Label>

                                        <Form.Control
                                            type="text"
                                            placeholder="Enter product image URL"
                                            name="productPhoto"
                                            onChange={handleChange}
                                            value={values.productPhoto}
                                            isValid={
                                                touched.productPhoto &&
                                                !errors.productPhoto
                                            }
                                            isInvalid={
                                                touched.productPhoto &&
                                                !!errors.productPhoto
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.productPhoto}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <div>
                                    <Button
                                        type="submit"
                                        variant="success"
                                    >
                                        Add Product
                                    </Button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}

export default AddProduct;