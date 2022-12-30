import React, { useContext, useState } from "react";
import { AllNewsContext } from "../../context/AllContext";
import { Grid, Card, Col, Row, Text, Input } from "@nextui-org/react";
import NewsInfo from "../news_info/NewsInfo";

const CardNews = ({ título }) => {
  const [allNews] = useContext(AllNewsContext);

  const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState("");

  return (
    <>
      <Row>
        <Col>
          <div className="cabecera_noticia">
            <h3>Listado Noticias</h3>
            <Input
              clearable
              contentLeftStyling={true}
              css={{
                w: "200px",
                "@xsMax": {
                  mw: "200px",
                },
              }}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search"
            ></Input>
          </div>
        </Col>
      </Row>
      <Grid.Container gap={2} justify="flex-start">
        {allNews.filter((item) => {
          return search.toLowerCase() === ""
          ? item
          : item.título.toLowerCase().includes(search) ||
          item.autor.toLowerCase().includes(search);
        }).map((item) => {
          return (
            <Grid key={item.id} xs={12} sm={3}>
              <Card>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#ffffffAA"
                    >
                      {item.título}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={item.imagen}
                    alt={item.título}
                    objectFit="cover"
                    width="100%"
                    height={340}
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Row>
                        <Text
                          css={{ color: "black" }}
                          size={15}
                          transform="uppercase"
                        >
                          Autor: {item.autor}
                        </Text>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="flex-end">
                    <NewsInfo
                      onClose={() => setVisible(false)}
                      título={item.título}
                      show={visible === título}
                      autor={item.autor}
                      photo={item.imagen}
                      info={item.descripcion}
                      summary={item.cuerpo}
                    >
                      {item.descripcion}
                    </NewsInfo>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
};

export default CardNews;
