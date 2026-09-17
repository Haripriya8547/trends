import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import { Container } from "react-bootstrap";
import { editProduct } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function EditProduct() {
    const { Formik } = formik;

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { id } = useParams();


    const { products } = useSelector(
        (state) => state.productState
    );


    const product = products.find(
        (product) => product.id === Number(id)
    );

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



    const handleEdit = (values) => {
        values.id = Number(id);



        dispatch(editProduct(values));

        toast.success("Product updated successfully!");

        navigate("/admin/list-product");
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center mt-4">
                        Edit Product
                    </h2>
                </Col>
            </Row>

            <Row className="m-3 justify-content-center">
                <Col md={6}>

                    <Formik
                        validationSchema={schema}
                        onSubmit={handleEdit}
                        initialValues={{
                            productName: product.productName,
                            productPrice: product.productPrice,
                            productDescription:
                                product.productDescription,
                            productPhoto: product.productPhoto || "",
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            touched,
                            errors,
                        }) => (

                            <Form
                                noValidate
                                onSubmit={handleSubmit}
                            >


                                <Form.Group className="mb-3">
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



                                <Form.Group className="mb-3">
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



                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Product Description
                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        placeholder="Product Description"
                                        name="productDescription"
                                        onChange={handleChange}
                                        value={
                                            values.productDescription
                                        }
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



                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Product Photo
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Product Photo URL"
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


                                <Button
                                    type="submit"
                                    variant="success"
                                    onClick={() =>
                                        navigate(
                                            "/admin/list-product"
                                        )
                                    }
                                >
                                    Edit Product
                                </Button>

                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="ms-2"
                                    onClick={() =>
                                        navigate(
                                            "/admin/list-product"
                                        )
                                    }
                                >
                                    Cancel
                                </Button>

                            </Form>
                        )}
                    </Formik>

                </Col>
            </Row>
        </Container>
    );
}

export default EditProduct;