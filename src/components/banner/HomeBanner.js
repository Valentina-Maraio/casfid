import React from "react";
import "./style/HomeBanner.css";
import home_banner from "../../assets/cabecera_home.jpg";
import logo from '../../assets/logo_casfid.png'

const HomeBanner = () => {
  return (
    <>
      <div
      className="home_banner"
        style={{
          backgroundImage: `url(${home_banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default HomeBanner;
