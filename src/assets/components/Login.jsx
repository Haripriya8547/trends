import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });
  const { users } = useSelector((state) => state.userState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const user = users.find((u) => u.email === loginData.email);

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }
    if (user.password !== loginData.password) {
      toast.error("Invalid password");
      return;
    }

    toast.success("User logged successfully");
    navigate("/");
  };

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setLogindata((prev) => {
      const updatedData = { ...prev };
      updatedData[fieldName] = fieldValue;
      return updatedData;
    });
  };

  console.log(loginData);

  return (
    <Row md={4} className="m-3 justify-content-center">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2>Login Page</h2>

        <Row className="mt-5 mb-3">
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className=" mb-3">
          <Form.Group as={Col} controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Remember"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <div>
          <Button type="submit" variant="success">
            Login
          </Button>
        </div>
        <Link to="/signup">If you don't have an account Signup here!</Link>
      </Form>
    </Row>
  );
}

export default Login;