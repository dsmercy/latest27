import React, { useEffect, useState } from "react";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import google from "../../assets/images/Google_Icons-09-512.png";
import facebook from "../../assets/images/Clip path group.png";
import instagram from "../../assets/images/Instagram_icon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from "../../services/Services";


const RegistrationForm = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'all' });
  const [validated, setValidated] = useState(false);
  const [role, setRole] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getRole();},[])

  const handleFormSubmit = async (formData) => {
    setValidated(true);

    formData.currentLocation = "";
    formData.middleName = "";
    
    Services.Account.register(formData).then(response => {
      console.log(response);
      toast.success(response.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
       navigate("/login");  
    }) .catch((error) => {
      // Error
      console.log('error.message', error.response.data.message);
              toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
  
  };

const getRole=()=>{
  Services.Account.getRole().then(response=>{
    console.log(response?.data);
    setRole(response?.data)
   }).catch((errors)=>{
    console.log(errors)
  }) 
}
  const backToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="log-bg">
        <div className="log-cent">
          <div className="log-card">
            <h4>Create Your Account</h4>
            <p>Fill out the following registration form to get started.</p>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <Row>
                <Col>
                  <FormLabel>Role</FormLabel>
                  <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    {...register("roleName", { required: true })}
                    isInvalid={!!errors.roleName}
                  >
                    <option value="">Select Role</option>
                    {role?.map((item, index) => (
        <option key={index} value={item?.roleName}>{item?.roleName}</option>
      ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a Role.
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row>
                <Col lg={6} sm={12}>
                  <FormLabel>First Name</FormLabel>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...register("firstName", { required: true })}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter First Name.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>

                <Col lg={6} sm={12}>
                  <FormLabel>Last Name</FormLabel>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...register("lastName", { required: true })}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid Username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormLabel>Email</FormLabel>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-envelope"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      {...register("email", {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                      })}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormLabel>Password</FormLabel>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                      isInvalid={!!errors.password}
                      name="password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid Password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormLabel>Phone</FormLabel>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-phone"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="phone"
                      placeholder="Phone"
                      aria-label="Username"
                      maxLength={10}
                      aria-describedby="basic-addon1"
                      {...register("phoneNumber", {
                        required: true,
                        maxLength: 10,
                        pattern: {
                          value: /^[0-9\b]+$/,
                          message: "Invalid phone number",
                        },
                      })}
                      isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid Phone Number.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>

              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3 d-flex">
                  <Form.Check
                    inline={true}
                    name="group3"
                    type={type}
                    id={`inline-${type}-1`}
                    {...register("checkbox", { required: true })}
                    isInvalid={!!errors.checkbox}
                  />
                  <p className="trm_condition">
                    I agree to the <a>Terms & Conditions</a> and{" "}
                    <a>Privacy Policy</a> of Poppin’ job.
                  </p>
                  <Form.Control.Feedback type="invalid">
                    Please tick the checkbox
                  </Form.Control.Feedback>
                </div>
              ))}

              <div className="login-btn">
                <Button variant="" type="submit">
                  Register
                </Button>
              </div>

              <div className="log-contiune">
                <p className="mb-0">or contiune with</p>
              </div>

              <div className="social-icon text-center1">
                <div className="">
                  <img src={google} alt="image" />
                </div>
                <div className="">
                  <img src={facebook} alt="image" />
                </div>
                <div className="">
                  <img src={instagram} alt="image" />
                </div>
              </div>

              <div className="register-now">
                <span>
                  Already have an account?
                  <Button variant="link" onClick={backToLogin}>
                    Login
                  </Button>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
