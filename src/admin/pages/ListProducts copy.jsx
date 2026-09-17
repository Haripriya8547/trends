import { Button, Container, Row, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./product.css";

function Listproduct() {
    const { products } = useSelector((state) => state.productState);

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleDeleteClick = (user) => {
        setSelectedProduct(user);
        setShowModal(true);
    };

    const handleDelete = () => {
        if (selectedProduct) {
            dispatch(deleteProduct(selectedProduct.id));
        }

        setShowModal(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <h2 className="text-center">List Products</h2>

            <Button
                variant="warning"
                className="d-flex justify-content-end m-3 rounded-5"
            >
                <Link
                    className="text-decoration-none text-black"
                    to="/admin/add-product"
                >
                    Add products
                </Link>
            </Button>

            <Container fluid>
                <Row className="bg-dark-subtle p-5">
                    <Table
                        striped
                        bordered
                        hover
                        className="tableList bg-success-subtle rounded-5 shadow-lg table-light"
                    >
                        <thead>
                            <tr>
                                <th>Product Photo</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            style={{
                                                width: "180px",
                                                height: "150px",
                                            }}
                                            src={product.productPhoto}
                                            alt={product.productName}
                                        />
                                    </td>

                                    <td>{product.productName}</td>

                                    <td className="text-danger fw-bold">
                                        {product.productPrice}
                                    </td>

                                    <td>
                                        <Link
                                            to={`/admin/edit-product/${product.id}`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M 16.0622 6.576 L 19.6836 9.3093"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />

                                                <path
                                                    d="M 8.7103 20.3337 C 8.6387 20.3337 8.5684 20.3102 8.5097 20.2666 C 8.4329 20.2086 8.3846 20.1201 8.3782 20.0245 C 8.3678 19.8793 8.1373 16.4385 9.7572 14.294 L 16.9901 4.7012 C 17.4849 4.0436 18.2428 3.6667 19.0682 3.6667 C 19.6373 3.6667 20.1789 3.8482 20.6333 4.1914 C 21.7778 5.056 22.007 6.6908 21.1423 7.836 L 13.9094 17.4294 C 12.2909 19.574 8.8041 20.3337 8.7103 20.3337 Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />

                                                <path
                                                    d="M 4.5118 19.4862 C 2.8737 18.1016 2.4302 16.8758 2.3479 15.9734 C 2.0893 13.1201 5.276 11.5988 5.2546 8.4148 C 5.2413 6.3721 3.9133 4.7214 2.832 3.6668"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Link>
                                    </td>

                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                handleDeleteClick(product)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                className="bi bi-trash3-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                            </svg>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>

        
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete this product?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </Button>

                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Listproduct;