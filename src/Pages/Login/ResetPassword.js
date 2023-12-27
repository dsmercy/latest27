import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Services from "../../services/Services";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [validated, setValidated] = useState(false);
  const [matchPassword, setMatchPassword] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  console.log("params", token, email);

  const backToLogin = () => {
    navigate("/login");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleFormSubmit = async () => {
    if (password !== newPassword) {
      setMatchPassword(false);
      return;
    }

    const body = { token: token, email: email, password: password };
    Services.Account.resetPassword(body)
      .then((response) => {
        console.log("response", response);
        toast.success(response, {
          position: toast.POSITION.TOP_RIGHT,
        });
        if(response.data.status===200){
          navigate('/login')
         }
        
      })
      .catch((errors) => {
        console.log(errors);
        toast.error(errors.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <>
      <div className="log-bg">
        <div className="log-cent">
          <div className="log-card">
            <h4>Reset Password</h4>
            <p>New password can not be same as the old password</p>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <Form.Group>
                <FormLabel>New Password</FormLabel>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                    })}
                    isInvalid={!!errors.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text>
                    {showPassword ? (
                      <i className="fa fa-eye" onClick={handleShowPassword}></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        aria-hidden="true"
                        onClick={handleShowPassword}
                      ></i>
                    )}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Please enter a password with at least 8 characters.
                  </Form.Control.Feedback>
                </InputGroup>

                <FormLabel>Confirm Password</FormLabel>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Password"
                    {...register("newPassword", {
                      required: true,
                      minLength: 8,
                    })}
                    isInvalid={!!errors.newPassword}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <InputGroup.Text>
                    {showPassword2 ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleShowPassword2}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        aria-hidden="true"
                        onClick={handleShowPassword2}
                      ></i>
                    )}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    {!matchPassword && password
                      ? "Password entered not match"
                      : ""}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <div className="login-btn">
                <Button variant="" type="submit">
                  Reset
                </Button>
              </div>
              <div className="register-now">
                <span>
                  Back to
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

export default ResetPassword;
