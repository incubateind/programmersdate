import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
// import { useAuth0 } from "../react-auth0-spa";
// import Axios from "axios";

let data = require("./data.json");

export const HMap = (props) => {
  const mapRef = React.useRef(null);

  const [modal, setModal] = useState(false);

  const [details, setDetails] = useState({});
  const [summary, setSummary] = useState({});

  const toggle = () => setModal(!modal);

  React.useLayoutEffect(() => {
    console.log("running");
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "4KPBKxjiNVDzx7F_50w9gvRBX_GYXUCjV0Xl8-kLLBw",
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 28, lng: 77 },
      zoom: 7,
      pixelRatio: window.devicePixelRatio || 1,
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers);

    const gicon = new H.map.Icon(
      "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519582-079_Pin2-512.png",
      { size: { w: 56, h: 50 } }
    );
    const ricon = new H.map.Icon(
      "https://cdn0.iconfinder.com/data/icons/twitter-24/512/157_Twitter_Location_Map-512.png",
      { size: { w: 56, h: 56 } }
    );
    const bicon = new H.map.Icon(
      "https://cdn4.iconfinder.com/data/icons/twitter-28/512/157_Twitter_Location_Map-512.png",
      { size: { w: 56, h: 56 } }
    );
    let routeLine;
    // Define a callback function to process the routing response:
    let onResult = function (result) {
      console.log(result);
      if (result.routes.length) {
        // result.routes.forEach(route =>{
        result.routes[0].sections.forEach((section) => {
          // Create a linestring to use as a point source for the route line
          let linestring = H.geo.LineString.fromFlexiblePolyline(
            section.polyline
          );

          // Create a polyline to display the route:
          routeLine = new H.map.Polyline(linestring, {
            style: {
              strokeColor: "#034F84",
              lineWidth: 3,
            },
          });

          //   // Create a marker for the start point:
          //   let startMarker = new H.map.Marker(section.departure.place.location);

          //   // Create a marker for the end point:
          //   let endMarker = new H.map.Marker(section.arrival.place.location);

          // Add the route polyline and the two markers to the map:
          console.log(routeLine);
          map.addObject(routeLine);

          // Set the map's viewport to make the whole route visible:
          map.getViewModel().setLookAtData({
            bounds: routeLine.getBoundingBox(),
          });
          // map.setZoom(7.6);
        });
        let sum = result.routes[0].sections[0].summary;
        setSummary({
          distance: `${sum.length} m`,
          time: `${Math.floor(sum.duration / 60)} min`,
        });
      }
    };

    const addMarkerfromData = (platform, data) => {
      //   console.log(data);
      let service = platform.getSearchService();
      data.map((ele) => {
        const currentGroup = new H.map.Group();
        // console.log(ele.position);
        map.addObject(currentGroup);
        // map.setCenter(ele.position);
        const currentMarker = new H.map.Marker(ele.position, {
          icon: ele.bed_count > 200 ? bicon : ricon,
        });
        currentGroup.addObject(currentMarker);
        currentGroup.addEventListener("tap", () => {
          setDetails(ele);
          routeLine ? map.removeObject(routeLine) : console.log();
          let router = platform.getRoutingService(null, 8);
          let routingParameters = {
            transportMode: "car",
            routingMode: "fast",
            origin: `${props.current.lat},${props.current.lng}`,
            destination: `${ele.position.lat},${ele.position.lng}`,
            return: "polyline,summary",
          };

          router.calculateRoute(routingParameters, onResult);
          //   setComp(!comp);
          setModal(!modal);
        });
      });
    };

    // const success = (position) => {
    //   let lat = position.coords.latitude;
    //   let lng = position.coords.longitude;
    if (props.current.lat > 0) {
      console.log(props.current);
      map.setCenter(props.current);
      map.setZoom(12);
      const currentMarker = new H.map.Marker(props.current, { icon: gicon });
      map.addObject(currentMarker);
      setTimeout(() => {
        let bubble = new H.ui.InfoBubble(
          {
            lat: props.current.lat + 0.01,
            lng: props.current.lng,
          },
          {
            content: "<div>You are here!</div>",
          }
        );
        ui.addBubble(bubble);
        let bubble2 = new H.ui.InfoBubble(
          {
            lat: props.current.lat,
            lng: props.current.lng + 0.1,
          },
          {
            content:
              "<div>Red markers represent hospitals with less than 200 beds and blue ones with more than 100</div>",
          }
        );
        ui.addBubble(bubble2);
      }, 5000);
    }

    // console.log(props.data);
    addMarkerfromData(platform, data);

    // Get an instance of the routing service version 8:

    // Create the parameters for the routing request:

    return () => {
      map.dispose();
    };
  }, [mapRef, data, props.current]);

  //   const { user } = useAuth0();
  //   const handleSubmit = (user, details) => {
  //     console.log("deta", details);
  //     let id = details._id;
  //     const volunteer = {
  //       name: user?.name,
  //       email: user?.email,
  //     };
  //     Axios.put(API_URL, { id, volunteer }).then((log) => console.log(log));
  //   };

  return (
    <div>
      <div
        className="map"
        ref={mapRef}
        style={{ height: "100vh", width: "auto", zIndex: "-1" }}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Modal
          isOpen={modal}
          toggle={toggle}
          //   contentClassName="custom-modal-style"
          labelledBy="request"
        >
          <ModalHeader toggle={toggle}>Hospital Details</ModalHeader>
          <ModalBody>
            <Container className="text-left">
              <Row>
                <Col xs="24" sm="12">
                  <br />
                  <h3> Name :</h3>
                  {details.name}
                  <br />
                  <br />
                  <h3>Address :</h3>
                  {details.address}
                  <br />
                  <br />
                  <h3>Bed Count :</h3>
                  {details.bed_count}
                  <div style={{ color: "#0000FF" }}>
                    <h6>Last update : June 27, 12 AM</h6>
                  </div>
                  <br />
                  <br />
                  <h3>Contact Details :</h3>
                  <p>
                    Phone Number :<a href="tel:+6494461709">{details.phone}</a>
                    <br></br>
                    Email :
                    <a href="mailto:someone@example.com">{details.email}</a>
                  </p>
                  <br />
                  <h3>Services Provided : </h3>
                  {details.services}
                  <br />
                  <br />
                  <h3>Total Distance from your location</h3>
                  {summary.distance}
                  <br />
                  <br />
                  <h3>Estimated Time If you start now</h3>
                  {summary.time}
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" size="lg" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      {/* {comp ? <Results></Results> : null} */}
    </div>
  );
};

const Results = () => {
  console.log("check");
  return (
    <div
      id="results"
      className="search-results"
      style={{
        height: "100vh",
        width: "20vh",
        zIndex: "10",
        backgroundColor: "#ccc",
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      Some Results
    </div>
  );
};
