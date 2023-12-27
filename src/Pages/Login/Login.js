/* eslint-disable */

import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import google from "../../assets/images/Google_Icons-09-512.png";
import facebook from "../../assets/images/Clip path group.png";
import instagram from "../../assets/images/Instagram_icon.png";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Services from "../../services/Services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAccountStore from "../../store/useAccountStore";

const Login = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {register,formState: { errors },handleSubmit} = useForm({ mode: "all" });
  const [otpField, setOtpField] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState();
  const [checked, setChecked] = useState(true);
  const [timer, setTimer] = useState(60);
  const [otpValue, setOtpValue]= useState({otp1:"", otp2:"", otp3:"", otp4:"", otp5:"", otp6:""});

  const signInUser = useAccountStore((state) => state.signInUser);
  const signOut = useAccountStore((state) => state.signOut);
  const signedInUserData = useAccountStore((state) => state.signedInUserData);

  useEffect(() => {
    if (!timer) return;
    const timerId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]);
  const resendOTP = () => {
    setTimer(60);
  };

  const handleForgetPassword = () => {
    navigate("/forgetpassword");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const handleOtpValue = (e) => {
    setOtpValue({...otpValue, [e.target.name]: e.target.value})
  };

const finalOtp= `${otpValue?.otp1}${otpValue?.otp2}${otpValue?.otp3}${otpValue?.otp4}${otpValue?.otp5}${otpValue?.otp6}`;

  const showOtpField = () => {
    setOtpField(true);
    setChecked(!checked);
  
    Services.Account.generateOTP(email)
      .then((response) => {
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((errors) => {
        console.log(":error", errors); 
      });
  };
  const showPasswordField = () => {
    setOtpField(false);
    setChecked(!checked);
  };

  const handleSubmitForm = async (e) => {
    setValidated(true);
    if (email === "" ) {
      return;
    }
    const data = { email: email, password: password ? password : finalOtp, isOtp: otpField };

    
    await signInUser(data).then((response) => {
        if (response?.data?.accessToken) {
          navigate(`/userdashboard`);
          localStorage.setItem("token", response.data.accessToken);
          toast.success(response.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((errors) => {
        console.log(errors.response.message);
        toast.error(errors.response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <div className="log-bg">
        <div className="log-cent">
          <div className="log-card">
            <h4>Login</h4>
            <p>Enter your credentials to access your account.</p>

            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <FormLabel>Enter your Email / Phone</FormLabel>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-user"></i>
                </InputGroup.Text>

                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  })}
                  isInvalid={!!errors.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </InputGroup>

              <Form.Group>
                <FormLabel>Login Using</FormLabel>

                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      checked={checked}
                      readOnly
                      inline
                      label="Password"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      onClick={showPasswordField}
                    />

                    <Form.Check
                      inline
                      label="OTP"
                      name="group1"
                      value={selectedRadio}
                      type={type}
                      id={`inline-${type}-2`}
                      onClick={showOtpField}
                    />
                  </div>
                ))}
              </Form.Group>

              {!otpField ? (
                <Form.Group>
                  <FormLabel>Password</FormLabel>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-lock"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
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
                        <i
                          className="fa fa-eye"
                          onClick={handleShowPassword}
                        ></i>
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
                </Form.Group>
              ) : (
                <Form className="form-otp">
                  <p>Enter verification code sent by mobile/email</p>
                  <input
                    className="otp"
                    name="otp1"
                    type="text"
                    maxLength="1"
                    value={otpValue.otp1}
                    onChange={(e) => handleOtpValue(e)}
                  />
                  <input
                    className="otp"
                    name="otp2"
                    type="text"
                    maxLength="1"
                    value={otpValue.otp2}
                    onChange={(e) => handleOtpValue(e)}
                  />
                  <input
                    className="otp"
                    name="otp3"
                    type="text"
                    maxLength="1"
                    value={otpValue.otp3}
                    onChange={(e) => handleOtpValue(e)}
                  />
                  <input
                    className="otp"
                    name="otp4"
                    type="text"
                    maxLength="1"
                    value={otpValue.otp4}
                    onChange={(e) => handleOtpValue(e)}
                  />
                  <input
                    className="otp"
                    name="otp5"
                    type="text"
                    maxLength="1"
                    value={otpValue.otp5}
                    onChange={(e) => handleOtpValue(e)}
                  />
                  <input
                    className="otp"
                    name="otp6"
                    type="text"
                    maxLength="1"
                    value={otpValue.otp6}
                    onChange={(e) => handleOtpValue(e)}
                  />
                </Form>
              )}
              <div style={{ display: "flex" }}>
                <p>{otpField && timer > 0 ? `Time Ramaining ${timer} ` : ""}</p>
                {
                  <p
                    style={{
                      color: timer > 0 ? "#DFE3E8" : "#FF5630",
                      cursor: "pointer",
                      marginRight: "20px",
                    }}
                    onClick={resendOTP}
                  >
                    {otpField ? "Resend OTP" : ""}
                  </p>
                }
              </div>
              <Form.Group className="remember">
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Remember me"
                      name="group3"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}

                <span>
                  <Button variant="link" onClick={handleForgetPassword}>
                    Forgot Password{" "}
                  </Button>
                </span>
              </Form.Group>

              <div className="login-btn">
                <Button variant="" type="submit">
                  Login
                </Button>
              </div>
            </Form>

            <div className="log-contiune">
              <p>or contiune with</p>
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
                Not a member
                <Button variant="link" onClick={handleRegister}>
                  Register Now
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
