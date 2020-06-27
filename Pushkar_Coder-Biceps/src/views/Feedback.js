
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

const Feedback = () => (
  <div className="content">
    <Row>
      <Col md="8">
        <Card>
          <Form class="contact-form" method="post">
            <input type="hidden" name="form-name" value="Feedback" />
            <CardHeader>
              <h2 className="title">Feedback</h2>
            </CardHeader>
            <CardBody>


              <Row>
                <Col className="pr-md-1" md="12">
                  <FormGroup>
                    <label>Name</label>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label htmlFor="exampleInputEmail1">
                      Email address
                          </label>
                    <Input placeholder="coder-biceps@email.com" type="email" name="email" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Feedback</label>
                    <Input
                      cols="80"
                      placeholder="Here can be your feedback"
                      rows="4"
                      type="textarea"
                      name="feedback"
                    />
                  </FormGroup>
                </Col>
              </Row>

            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="primary" type="submit" value="send">
                Send
                  </Button>
            </CardFooter>
          </Form>
        </Card>
      </Col>
      <Col md="4">
        <Card className="card-user">
          <CardBody>
            <CardText />
            <div className="author">
              <div className="block block-one" />
              <div className="block block-two" />


              <img
                alt="..."
                src={require("assets/img/contact-image.webp")}
              />


            </div>

          </CardBody>

        </Card>
      </Col>
    </Row>
  </div>
);

export default Feedback;
