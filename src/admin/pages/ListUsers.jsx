import {
    Button,
    Container,
    Row,
    Table,
    Modal,
    Form,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
    deleteUser,
    userRoleChange,
    userStatusChange,
} from "../../redux/userSlice";

import { toast } from "react-toastify";

function ListUsers() {

    const { users } = useSelector(
        (state) => state.userState
    );

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };


    const handleDelete = () => {

        if (selectedUser) {

            dispatch(deleteUser(selectedUser.id));

            toast.success("User deleted successfully!");

        }

        setShowModal(false);
        setSelectedUser(null);
    };


    const handleStatus = (id, status) => {

        dispatch(
            userStatusChange({
                id: id
            })
        );

        if (status) {
            toast.success("User deactivated successfully!");
        } else {
            toast.success("User activated successfully!");
        }
    };

    const handleRoleChange = (e, userId) => {
        dispatch(userRoleChange({ id: userId, role: e.target.value }));
        toast.success("role updated successfully!");
    }

    return (
        <>
            <h2 className="text-center">
                User List
            </h2>

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
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>

                            {users.map((user) => (

                                <tr key={user.id}>

                                    <td>
                                        {user.fullname}
                                    </td>

                                    <td>
                                        {user.email}
                                    </td>

                                    <td>
                                        <Form.Select defaultValue={user?.role} onChange={(event) => handleRoleChange(event, user.id)} >

                                            <option value="admin">Admin</option>
                                            <option value="seller">Seller</option>
                                            <option value="user">User</option>
                                        </Form.Select>
                                    </td>

                                    <td>

                                        <Form.Check
                                            type="switch"
                                            checked={user.status}
                                            onChange={() =>
                                                handleStatus(
                                                    user.id,
                                                    user.status
                                                )
                                            }
                                            label={
                                                user.status
                                                    ? "Active"
                                                    : "Inactive"
                                            }
                                        />

                                    </td>

                                    <td>

                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                handleDeleteClick(user)
                                            }
                                        >
                                            Delete
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

                    <Modal.Title>
                        Delete User
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <p>
                        Are you sure you want to delete this user?
                    </p>

                    {selectedUser && (
                        <p>
                            <strong>
                                {selectedUser.fullname}
                            </strong>
                        </p>
                    )}

                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default ListUsers;