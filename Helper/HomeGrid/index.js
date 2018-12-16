import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import Card from "../../components/Card";

class componentName extends Component {
  render() {
    return (
      <Grid style={{ backgroundColor: "lightblue", padding: 2 }}>
        <Col>
          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/handsfree.jpg")} />
          </Row>

          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/peelb.jpg")} />
          </Row>

          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/teeth.jpg")} />
          </Row>

          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/watch.jpg")} />
          </Row>

          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/heads.jpg")} />
          </Row>
        </Col>

        <Col>
          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/heads.jpg")} />
          </Row>

          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/slicer.jpg")} />
          </Row>
          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/tezdum.jpg")} />
          </Row>

          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/watch1.jpg")} />
          </Row>
          <Row style={{ backgroundColor: "red", height: 320 }}>
            <Card source={require("../../assets/Trending/handsfree.jpg")} />
          </Row>
        </Col>
      </Grid>
    );
  }
}

export default componentName;
