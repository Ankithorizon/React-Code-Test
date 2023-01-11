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
    else if (param === "remote-api") navigate("/remote-api");
    else if (param === "form-submit") navigate("/form-submit");
    else if (param === "paging") navigate("/paging");
    else if (param === "master-detail") navigate("/master-detail");
  };
  return (
    <div className="mainContainer">
      <h3>React-Code-Test</h3>

      <p></p>
      <div className="innerContent">
        <Container>
          <Row>
            <Col className="innerContent">
              <Card className="cardStyle" style={{ width: "18rem" }}>
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
            <Col className="innerContent">
              {" "}
              <Card className="cardStyle" style={{ width: "18rem" }}>
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
                  <Button
                    onClick={() => {
                      getCode("remote-api");
                    }}
                    variant="primary"
                  >
                    See code...
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="innerContent">
              <Card className="cardStyle" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Form-Submit-Validation</Card.Title>
                  <Card.Text>
                    <span>form submit</span>
                    <br />
                    <span>form validation</span>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      getCode("form-submit");
                    }}
                    variant="primary"
                  >
                    See code...
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="innerContent">
              <Card className="cardStyle" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Paging</Card.Title>
                  <Card.Text>
                    <span>paging</span>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      getCode("paging");
                    }}
                    variant="primary"
                  >
                    See code...
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="innerContent">
              <Card className="cardStyle" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Master-Detail</Card.Title>
                  <Card.Text>
                    <span>master-detail</span>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      getCode("master-detail");
                    }}
                    variant="primary"
                  >
                    See code...
                  </Button>
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
