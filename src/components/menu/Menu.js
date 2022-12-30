import React from "react";
import casfid from "../../assets/logo_casfid.png";
import logo from "../../assets/logo_dibujo_idasfest.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={casfid}
              width="36"
              height="36"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Brand className="justify-content-end">
              <img
                alt="logo"
                src={logo}
                width="36"
                height="36"
                className="d-inline-block align-top"
              />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
