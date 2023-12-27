import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Services from '../../services/Services';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const {register,formState: { errors }} = useForm({ mode: 'all' });
  const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/login");
  };

  const body ={email:email, domain:`${window.location.origin}/`};
  // console.log(body);
  const handleReset = () => {
    Services.Account.forgetPassword(body).then(response=>{
      // console.log("response", response);
      toast.success(response.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      // console.log(response.message);
      
    }).catch((error)=>{
      console.log(error.response.data.title);
    })
    // navigate("/resetpassword");
  };
  

  return (
    <>
      <div className="log-bg">
        <div className="log-cent">
          <div className="log-card">
            <h4>Forgot Password?</h4>
            <p>
              The Poppin jobs has your back. Enter your email and we will send
              you password reset instructions
            </p>
            <FormLabel>Enter your Email / Phone</FormLabel>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i className="fa fa-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
                isInvalid={!!errors.email}
                onChange={e=>setEmail(e.target.value)}
              />
            </InputGroup>
            <Form.Control.Feedback type="invalid">
                      Please enter a valid Email.
                    </Form.Control.Feedback>
            <div className="login-btn">
              <Button variant="" onClick={handleReset}>Send Reset Instructions</Button>
            </div>

            <div className="register-now">
              <span>
                Back to
                <Button variant="link" onClick={backToLogin}>
                  Login
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword
