import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";

const Social = () => {
  return (
    <div className="social_box">
      <h5>SOCIAL MEDIA</h5>
      <Container>
        <Row>
          <Col>
            <a href="https://www.linkedin.com/company/casfid" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
          </Col>
          <Col>
            <a href="https://www.facebook.com/casfid.es" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/casfid/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
          </Col>
          <Col>
            <a href="https://www.youtube.com/channel/UCb2wG4iXm-mQZiR9A2SjQqw" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Social;
