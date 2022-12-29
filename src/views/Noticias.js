import React from "react";
import './style/Noticias.css'
import Noticia from '../components/noticia/Noticia'
import Contact from "../components/contact/Contact";
import Social from "../components/social_media/Social";

const Noticias = () => {
  return (
    <>
      <Noticia/>
      <div className="noticia_box">
        <Contact />
        <Social />
      </div>
    </>
  );
};

export default Noticias;
