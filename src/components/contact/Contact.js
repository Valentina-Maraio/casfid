import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [email, setEmail] = useState("");

  const [check, setCheck] = useState(false);

  const validate = () => {
    return email.length && check;
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const submit = () => {
    alert("sent");
  };

  return (
    <div className="contact_box">
      <h5>Contact</h5>
      <br/>
      <Form>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            value={check}
            onChange={handleCheck}
            label="Al suscribirte, aceptas nuestra politica de privacidad"
          />
        </Form.Group>
        <Button
          onClick={submit}
          disabled={!validate()}
          variant="primary"
          type="submit"
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;


