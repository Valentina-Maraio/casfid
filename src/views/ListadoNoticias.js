import React from "react";
import "./style/ListadoNoticias.css";
import Menu from "../components/menu/Menu";
import { Container } from "react-bootstrap";
import { AllNewsProvider } from "../context/AllContext";
import CardNews from "../components/card/CardNews";

const ListadoNoticias = () => {

  return (
    <>
      <Menu />
      <Container>
        <AllNewsProvider>
          <CardNews />
        </AllNewsProvider>
      </Container>
    </>
  );
};

export default ListadoNoticias;
