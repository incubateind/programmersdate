
import React from "react";



// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

const Dashboard = () => {

  return (

    <div className="content">
      <Row>
        <Col xs="12" >
          <Card className="card-chart" >
            <CardHeader>
              <CardTitle tag="h2">Social Media Trend Map</CardTitle>

              <p className="card-category d-inline"> 2020</p>
            </CardHeader>
            <CardBody>

            </CardBody>
          </Card>
        </Col>

      </Row>
      <Row>


      </Row>
      <Row>
        <Col lg="4">
          <Card className="card-chart">

            <CardHeader>
              <CardTitle tag="h2">

              </CardTitle>
            </CardHeader>
            <CardBody>
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <p className="title"></p>
                      <p className="text-muted">

                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}


export default Dashboard;
