import React from "react";
import Menu from "../components/menu/Menu";
import HomeBanner from "../components/banner/HomeBanner";
import logo from "../assets/logo_dibujo_idasfest.png";
import Noticias from "./Noticias";

const Home = () => {
  return (
    <>
      <Menu />
      <HomeBanner />
      <div className="home_box">
        <p>5 - 7 SEPTIEMBRE, MÁLAGA</p>
        <div className="logo_home">
          <div className="logo_box">
            <img className="logo" alt="logo" src={logo} />
          </div>
        </div>
      </div>
      <div className="evento">
        <h5>INNOVACIÓN COMO EXIGENCIA</h5>
        <br />
        <p>5 -7 Septiembre 2022</p>
      </div>
      <div className="noticias">
        <Noticias />
      </div>
    </>
  );
};

export default Home;

<div className="logo_home">
  <img alt="logo" src={logo} />
</div>;
