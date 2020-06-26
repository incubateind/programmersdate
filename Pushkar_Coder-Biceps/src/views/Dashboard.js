import React, { Component } from "react";
import { HereMap, Marker } from "rc-here-maps";
import virus from "./virus_map.png";
import cured from "./cured_map.png";
import dead from "./dead_map.png";
import "./App.css";
import marker from "./marker.png";


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
class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Location: "",
      Facebook: 0,
      Instagram: 0,
      WhatsApp: 0,
      YouTube: 0,
      Pinterest: 0,
      Linked: 0,
      Tik: 0,
      showPopover: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      load: false,
      data: [],
      position: [
        { lat: 11.7401, lng: 92.6586 },
        { lat: 15.9129, lng: 79.74 },
        { lat: 28.218, lng: 94.7278 },
        { lat: 26.2006, lng: 92.9376 },
        { lat: 25.0961, lng: 85.3131 },
        { lat: 30.7333, lng: 76.7794 },
        { lat: 21.2787, lng: 81.8661 },
        { lat: 20.1809, lng: 73.0169 },
        { lat: 28.7041, lng: 77.1025 },
        { lat: 15.2993, lng: 74.124 },
        { lat: 22.2587, lng: 71.1924 },
        { lat: 29.0588, lng: 76.0856 },
        { lat: 31.1048, lng: 77.1734 },
        { lat: 33.7782, lng: 76.5762 },
        { lat: 23.6102, lng: 85.2799 },
        { lat: 15.3173, lng: 75.7139 },
        { lat: 10.8505, lng: 76.2711 },
        { lat: 35.0411, lng: 77.9371 },
        { lat: 22.9734, lng: 78.6569 },
        { lat: 19.7515, lng: 75.7139 },
        { lat: 24.6637, lng: 93.9063 },
        { lat: 25.467, lng: 91.3662 },
        { lat: 23.1645, lng: 92.9376 },
        { lat: 26.1584, lng: 94.5624 },
        { lat: 20.9517, lng: 85.0985 },
        { lat: 11.9416, lng: 79.8083 },
        { lat: 31.1471, lng: 75.3412 },
        { lat: 27.0238, lng: 74.2179 },
        { lat: 27.533, lng: 88.5122 },
        { lat: 11.1271, lng: 78.6569 },
        { lat: 18.1124, lng: 79.0193 },
        { lat: 23.9408, lng: 91.9882 },
        { lat: 30.0668, lng: 79.0193 },
        { lat: 26.8467, lng: 80.9462 },
        { lat: 22.9868, lng: 87.855 }
      ],
      center: {
        lat: 30.7333,
        lng: 76.7794
      }
    };
  }
  getData = async () => {

    const counts = [
      {
        "WhatsApp": 40,
        "Instagram": 10,
        "loc": "Andaman and Nicobar Islands",
        "Facebook": 50,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 45,
        "Instagram": 11,
        "loc": "Andhra Pradesh",
        "Facebook": 10,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 22,
        "Instagram": 10,
        "loc": "Arunachal Pradesh",
        "Facebook": 14,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 37,
        "Instagram": 19,
        "loc": "Assam",
        "Facebook": 58,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 61,
        "Instagram": 56,
        "loc": "Bihar",
        "Facebook": 81,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 32,
        "Instagram": 16,
        "loc": "Chandigarh",
        "Facebook": 41,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 15,
        "Instagram": 12,
        "loc": "Chhattisgarh",
        "Facebook": 23,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 29,
        "Instagram": 0,
        "loc": "Dadra and Nagar Haveli and Daman and Diu",
        "Facebook": 12,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 39,
        "Instagram": 23,
        "loc": "Delhi",
        "Facebook": 66,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 20,
        "Instagram": 1,
        "loc": "Goa",
        "Facebook": 90,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 20,
        "Instagram": 17,
        "loc": "Gujarat",
        "Facebook": 28,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 64,
        "Instagram": 17,
        "loc": "Haryana",
        "Facebook": 11,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 44,
        "Instagram": 8,
        "loc": "Himachal Pradesh",
        "Facebook": 77,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 36,
        "Instagram": 87,
        "loc": "Jammu and Kashmir",
        "Facebook": 62,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 15,
        "Instagram": 11,
        "loc": "Jharkhand",
        "Facebook": 21,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 60,
        "Instagram": 15,
        "loc": "Karnataka",
        "Facebook": 97,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 18,
        "Instagram": 22,
        "loc": "Kerala",
        "Facebook": 34,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 14,
        "Instagram": 1,
        "loc": "Ladakh",
        "Facebook": 93,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 93,
        "Instagram": 52,
        "loc": "Madhya Pradesh",
        "Facebook": 12,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 69,
        "Instagram": 65,
        "loc": "Maharashtra",
        "Facebook": 13,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 25,
        "Instagram": 10,
        "loc": "Manipur",
        "Facebook": 92,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 37,
        "Instagram": 10,
        "loc": "Meghalaya",
        "Facebook": 46,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 90,
        "Instagram": 10,
        "loc": "Mizoram",
        "Facebook": 14,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 14,
        "Instagram": 10,
        "loc": "Nagaland",
        "Facebook": 33,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 39,
        "Instagram": 17,
        "loc": "Odisha",
        "Facebook": 54,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 16,
        "Instagram": 90,
        "loc": "Puducherry",
        "Facebook": 40,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 30,
        "Instagram": 10,
        "loc": "Punjab",
        "Facebook": 43,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 12,
        "Instagram": 36,
        "loc": "Rajasthan",
        "Facebook": 15,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 29,
        "Instagram": 10,
        "loc": "Sikkim",
        "Facebook": 79,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 35,
        "Instagram": 83,
        "loc": "Tamil Nadu",
        "Facebook": 64,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 42,
        "Instagram": 22,
        "loc": "Telangana",
        "Facebook": 95,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 80,
        "Instagram": 10,
        "loc": "Tripura",
        "Facebook": 12,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 16,
        "Instagram": 30,
        "loc": "Uttarakhand",
        "Facebook": 25,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 12,
        "Instagram": 58,
        "loc": "Uttar Pradesh",
        "Facebook": 18,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      },
      {
        "WhatsApp": 92,
        "Instagram": 58,
        "loc": "West Bengal",
        "Facebook": 14,
        "YouTube": 20,
        "Pinterest": 2,
        "LinkedIn": 5,
        "TikTok": 80
      }
    ];
    this.setState({
      data: counts,
      load: true
    });

  };

  onTogglePopover = (showPopover, id) => {
    let pop = this.state.showPopover;
    pop[id] = showPopover;
    this.setState({ showPopover: pop });
  };


  savestate = (loc, fb, ins, wh, yt, pin, linked, tik) => {
    this.setState({
      Location: loc,
      Facebook: fb,
      Instagram: ins,
      WhatsApp: wh,
      YouTube: yt,
      Pinterest: pin,
      Linked: linked,
      Tik: tik
    })
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    if (this.state.load) {
      return (
        <div className="content">
          <Row>
            <Col lg="3" style={{ marginTop: "200px" }}>
              <Card className="card-chart">

                {this.state.Location !== "" ?

                  <>
                    <CardHeader>
                      <CardTitle tag="h2">
                        {this.state.Location}
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <p className="title">

                                Facebook : {this.state.Facebook}% | WhatsApp : {this.state.WhatsApp}% | Instagram : {this.state.Instagram}%

                          </p>
                              <br />
                              <p className="title">

                                YouTube : {this.state.YouTube}% | Pinterest : {this.state.Pinterest}% | TikTok : {this.state.Tik}% | LinkedIn : {this.state.Linked}%

</p>
                            </td>

                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </>
                  : <>
                    <CardHeader>
                      <CardTitle tag="h2">
                        Click on a location
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table>
                        <tbody>
                          <tr>
                            <td>

                            </td>

                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>

                  </>}

              </Card>
            </Col>
            <Col xs="8" >
              <Card className="card-chart" >
                <CardHeader>
                  <CardTitle tag="h2">Social Trends India (Here Map)</CardTitle>

                  <p className="card-category d-inline"> 2020</p>
                </CardHeader>
                <CardBody>
                  <div style={{ height: "500px" }}>
                    <HereMap
                      style={{ width: "100%", height: "100%" }}
                      appId="0fYEmBdIzWGU8LH7EOwy"
                      appCode="La34b8payBKbfDVo2k4A4GT5J-p-KZGyl_VgNd-f_Ws"
                      useHTTPS
                      center={this.state.center}
                    >
                      {this.state.data.map((data, id) => (
                        <Marker
                          onClick={this.savestate.bind(this, data.loc, data.Facebook, data.Instagram, data.WhatsApp, data.YouTube, data.Pinterest, data.LinkedIn, data.TikTok)}
                          onMouseEnter={this.onTogglePopover.bind(this, true, id)}
                          onMouseLeave={this.onTogglePopover.bind(this, false, id)}
                          key={id}
                          lat={this.state.position[id].lat}
                          lng={this.state.position[id].lng}
                        >
                          <img src={marker} alt="Mark" style={{ zIndex: 0 }} />

                          {this.state.showPopover[id] && (
                            <div className="pop-over">
                              <p className="lead">{data.loc}</p>
                              <p className="d-inline">
                                <span>
                                  <img src={virus} alt="virus" />
                                  {" "}{data.Facebook}%{" "}
                                </span>
                              </p>
                              <p className="d-inline">
                                <span>
                                  <img src={cured} alt="cured" />
                                  {" "}{data.WhatsApp}%{" "}
                                </span>
                              </p>
                              <p className="d-inline">
                                <span>
                                  <img src={dead} alt="Dead" />
                                </span>{" "}
                                {" "}{data.Instagram}%{" "}
                              </p>

                            </div>
                          )}
                        </Marker>
                      ))}
                    </HereMap>
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>

        </div>
      );
    } else return "Hey";
  }
}

export default Maps;
