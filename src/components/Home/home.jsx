/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";

import "./style.css";

const Home = () => {
  let navigate = useNavigate();

  const getCode = (param) => {
    console.log(param);
    if (param === "counter") navigate("/counter");
  };
  return (
    <div className="mainContainer">
      <h3>React-Code-Test</h3>

      <p></p>
      <div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Counter Button</Card.Title>
                  <Card.Text>
                    Button click event increment Counter state value
                  </Card.Text>
                  <Button
                    onClick={() => {
                      getCode("counter");
                    }}
                    variant="primary"
                  >
                    See code...
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Remote Api Call</Card.Title>
                  <Card.Text>
                    <span className="remoteApi">https://randomuser.me/api</span>
                    <br />
                    <span>
                      component load(useEffect) calls remote api(returns json[])
                    </span>
                    <br />
                    <span>display json[] data(string, image) to table</span>
                    <br />
                    <span>
                      [NEXT] button gets single data[record by record] from
                      remote api,,, user clickes [NEXT] button and gets next
                      data[record] each time
                    </span>
                  </Card.Text>
                  <Button variant="primary">See code...</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
