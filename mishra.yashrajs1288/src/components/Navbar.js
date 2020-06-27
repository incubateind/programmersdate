import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
//   import "assets/stylesheets/application.scss";

const NavBar = () => {
  return (
    <Menu tabular inverted style={{ margin: "0" }}>
      <Container>
        <Menu.Item as="a" header href="/">
          <Image
            size="mini"
            src="https://yashraj-cdn.now.sh/logo-01.png"
            style={{ marginRight: "1.5em" }}
          />
          Hospital Bed Tracker
        </Menu.Item>
        <Menu.Item as="a" href="/record">
          List
        </Menu.Item>
        <Menu.Item as="a" href="/about">
          About
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
