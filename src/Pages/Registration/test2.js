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
    />
    <Form.Control.Feedback type="invalid">
      Please enter a valid email address.
    </Form.Control.Feedback>
  </InputGroup>
  <Form.Group className={validate}>
    <FormLabel>Password</FormLabel>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        <i className="fa fa-lock"></i>
      </InputGroup.Text>

      <Form.Control
        type="password"
        placeholder="Password"
        {...register("password", { required: true, minLength: 8 })}
        isInvalid={!!errors.password}
      />
      <Form.Control.Feedback type="invalid">
        Please enter a password with at least 8 characters.
      </Form.Control.Feedback>

      <InputGroup.Text>
        <i className="fa fa-eye"></i>
      </InputGroup.Text>
    </InputGroup>
  </Form.Group>

  <Form.Group>
    <FormLabel>Login Using</FormLabel>

    {["radio"].map((type) => (
      <div key={`default-${type}`} className="mb-3">
        <Form.Check
          inline
          label="Password"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
        />

        <Form.Check
          inline
          label="OTP"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form.Group>

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
</Form>;
