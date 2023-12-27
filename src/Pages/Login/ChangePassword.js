import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import Services from "../../services/Services";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [matchPassword2, setMatchPassword2] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const handleFormSubmit = async () => {
    console.log("First");
    console.log("Old Password", oldPassword);
    console.log("newPassword", newPassword);
    console.log("confirmPassword", confirmPassword);
    if (oldPassword === newPassword) {
      setMatchPassword(true);
      return;
    }
    console.log("Secondn");
    if (newPassword !== confirmPassword) {
      console.log("inside");
      setMatchPassword(false);
      setMatchPassword2(true);
      return;
    }
    console.log("Third");
    setMatchPassword2(false);
    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    console.log(body);
    Services.Account.changePassword(body)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };

  console.log("matchPassword2", matchPassword2);
  return (
    <>
      <div className="log-bg">
        <div className="log-cent">
          <div className="log-card">
            <h4>Change Password</h4>
            {/* <p>New password can not be same as the old password</p> */}

            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <Form.Group>
                <FormLabel>Old Password</FormLabel>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="old Password"
                    autoComplete="oldPassword"
                    {...register("oldPassword", {
                      required: true,
                      minLength: 8,
                     
                    })}
                    isInvalid={!!errors.oldPassword}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <InputGroup.Text>
                    {showPassword ? ( <i className="fa fa-eye" onClick={handleShowPassword}></i> ) : (<i className="fa fa-eye-slash" aria-hidden="true" onClick={handleShowPassword} ></i> )}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Please enter a password with at least 8 characters.
                  </Form.Control.Feedback>
                </InputGroup>

                <FormLabel>New Password</FormLabel>
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
                      validate: value =>
                      value === newPassword || "Passwords do not match"
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
                  <Form.Control.Feedback type="invalid">Enter the correct password</Form.Control.Feedback>
                </InputGroup>

                <FormLabel>Confirm Password</FormLabel>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type={showPassword3 ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 8,
                      validate: value =>
                      value === newPassword || "Passwords is not matching"
                    })}
                    isInvalid={!!errors.confirmPassword}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <InputGroup.Text>
                    {showPassword3 ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleShowPassword3}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        aria-hidden="true"
                        onClick={handleShowPassword3}
                      ></i>
                    )}
                  </InputGroup.Text>
                </InputGroup>
              <Form.Control.Feedback type="invalid">Password should match new password </Form.Control.Feedback>
                 </Form.Group>

              <div className="login-btn">
                <Button type="submit">Change Password</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
