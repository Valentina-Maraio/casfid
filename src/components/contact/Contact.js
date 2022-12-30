import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  
  const [check, setCheck] = useState(false);

  const validate = () => {
    return email.length && check;
  };
  
  const handleCheck = () => {
    setCheck(!check)
  };
  
  const submit = () => {
    alert('salvato')
  };


  return (
    <div className="contact_box">
      <h5>Contact</h5>
      <div className="form">
        <form>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="checkbox"
            value={check}
            onChange={handleCheck}
            style={{ float: "left", marginTop: "5px" }}
          />
          <div style={{ marginLeft: "25px" }}>
            <span>Al suscribirte, aceptas nuestra politica de privacidad</span>
          </div>
          <button onClick={submit} type="button" disabled={!validate()}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
