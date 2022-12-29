import React from "react";
import "./style/Noticia.css";
import noticia from "../../assets/noticias.png";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Noticia = () => {
  return (
    <>
      <div className="noticias_box">
        <h5>NOTICIAS</h5>
        <img src={noticia} alt="noticia" />
      </div>
      <Link to="/listado-noticias">
        <Button
          auto
          color="primary"
          rounded
          bordered
          className="button"
        >
          VER MAS
        </Button>
      </Link>
    </>
  );
};

export default Noticia;
