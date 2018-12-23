import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
  Tab,
  Tabs
} from "native-base";
import Header from "../../Helper/Header";

export default class setToken extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerColor="#00BF8C"
          icon={"ios-arrow-round-back"}
          title={"Token Setup"}
          hasTabs={true}
          searchBtn={false}
          favBtn={false}
          threeDots={true}
          {...this.props}
          goBack={true}
        />
        <Tabs>
          <Tab
            tabStyle={{ backgroundColor: "#00BF8C" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#00BF8C" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Get Token"
          >
            <TokenCard />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#00BF8C" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#00BF8C" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Statistics"
          >
            <Statistics />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

class TokenCard extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Content>
          <Card style={{ flex: 1, flexDirection: "column", padding: 3 }}>
            <CardItem>
              <Left>
                <Icon name="ios-radio-button-on" />
                <Body>
                  <Text>Total Token </Text>
                  <Text>April 15, 2016</Text>
                </Body>
              </Left>

              <Right>
                <Body>
                  <Text>Current Token </Text>
                  <Text>April 15, 2016</Text>
                </Body>
              </Right>
              <Icon name="ios-nuclear" />
            </CardItem>

            <CardItem>
              <Left>
                <Icon name="ios-time" />
                <Body>
                  <Text>Average Token Time </Text>
                  <Text>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem style={{ justifyContent: "flex-end" }}>
              <Button
                large
                style={{ backgroundColor: "red", borderRadius: 25 }}
              >
                <Text>1,926 stars</Text>
                <Icon name="md-add" />
              </Button>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}

class Statistics extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Statistics</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
