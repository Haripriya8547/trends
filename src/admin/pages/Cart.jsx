
import {
    Button,
    Container,
    InputGroup,
    Modal,
    Row,
    Table,
    Form
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

import {
    incrementCartitemQuantity,
    decrementCartitemQuantity,
    deleteProduct
} from "../../redux/productSlice";

import "./product.css";

function Cart() {

    const dispatch = useDispatch();

    // Get cart items from Redux
    const { cartItems = [] } = useSelector(
        (state) => state.productState
    );

    const [show, setShow] = useState(false);
    const [deleteProductId, setDeleteProductId] =
        useState(null);

    // Close modal
    const handleClose = () => {
        setShow(false);
        setDeleteProductId(null);
    };

    // Open delete confirmation
    const handleDeleteProduct = (productId) => {
        setDeleteProductId(productId);
        setShow(true);
    };

    // Confirm delete
    const confirmProductDelete = () => {

        if (deleteProductId !== null) {
            dispatch(deleteProduct(deleteProductId));

            toast.success("Product deleted successfully!");
        }

        handleClose();
    };

    // Increase quantity
    const handleItemQuantityIncrement = (productId) => {
        dispatch(incrementCartitemQuantity(productId));
    };

    // Decrease quantity
    const handleItemQuantityDecrement = (productId) => {
        dispatch(decrementCartitemQuantity(productId));
    };

    return (
        <>
            <h2 className="text-center m-5">
                Cart List
            </h2>

            <Container fluid>
                <Row className="bg-dark-subtle p-4">

                    <Table
                        striped
                        bordered
                        hover
                        responsive
                        className="tableList bg-success-subtle rounded-5 shadow-lg table-light"
                    >

                        <thead>
                            <tr>
                                <th>Product Photo</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>

                            {cartItems.length > 0 ? (

                                cartItems.map((product) => (

                                    <tr key={product.id}>

                                        {/* Product Image */}
                                        <td className="align-middle">
                                            <img
                                                style={{
                                                    width: "180px",
                                                    height: "150px",
                                                    objectFit: "contain"
                                                }}
                                                src={
                                                    product.productPhoto ||
                                                    product.productImage
                                                }
                                                alt={product.productName}
                                            />
                                        </td>

                                        {/* Product Name */}
                                        <td className="align-middle">
                                            {product.productName}
                                        </td>

                                        {/* Product Price */}
                                        <td className="align-middle text-danger fw-bold">
                                            ${product.productPrice}
                                        </td>

                                        {/* Quantity */}
                                        <td className="align-middle">

                                            <InputGroup className="quantity-box">

                                                <Button
                                                    variant="outline-danger"
                                                    onClick={() =>
                                                        handleItemQuantityDecrement(
                                                            product.id
                                                        )
                                                    }
                                                    disabled={
                                                        (product.quantity ?? 1) <= 1
                                                    }
                                                >
                                                    -
                                                </Button>

                                                <Form.Control
                                                    type="text"
                                                    value={product.quantity ?? 1}
                                                    readOnly
                                                    className="text-center"
                                                />

                                                <Button
                                                    variant="outline-success"
                                                    onClick={() =>
                                                        handleItemQuantityIncrement(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    +
                                                </Button>

                                            </InputGroup>

                                        </td>

                                        {/* Remove Button */}
                                        <td className="align-middle text-center">

                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    handleDeleteProduct(
                                                        product.id
                                                    )
                                                }
                                            >
                                                Remove
                                            </Button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center p-4"
                                    >
                                        Your cart is empty
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </Table>

                </Row>
            </Container>

            {/* Delete Confirmation Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        Delete Product
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to delete this product?
                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="warning"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="danger"
                        onClick={confirmProductDelete}
                    >
                        Delete
                    </Button>

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Cart;