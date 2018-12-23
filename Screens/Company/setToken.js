import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Body,
  View,
  Tab,
  Tabs,
  Item,
  Input,
  Label,
  CheckBox,
  ListItem,
  Left,
  Right
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
            heading="Update"
          >
            <TokenUpdate />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#00BF8C" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#00BF8C" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Add Tokens"
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
  constructor() {
    super();
    this.state = {
      allowTokens: false
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Content>
          <Card style={{ flex: 1, flexDirection: "column", padding: 3 }}>
            <ListItem style={{ flexDirection: "row" }}>
              <CheckBox
                onPress={() =>
                  this.setState({ allowTokens: !this.state.allowTokens })
                }
                checked={this.state.allowTokens}
              />
              <Body>
                {this.state.allowTokens ? (
                  <Text>Add Tokens </Text>
                ) : (
                  <Text>No Tokens today </Text>
                )}
              </Body>
            </ListItem>

            {this.state.allowTokens && (
              <CardItem>
                <Label>Total Tokens : </Label>
                <Item style={{ width: 200 }}>
                  <Input
                    keyboardType="number-pad"
                    onChangeText={text => this.setState({ companyName: text })}
                  />
                  <Icon active name="ios-help-buoy" />
                </Item>
              </CardItem>
            )}

            {this.state.allowTokens && (
              <CardItem>
                <Label>Time for each Token : </Label>
                <Item style={{ width: 150 }}>
                  <Input
                    keyboardType="number-pad"
                    onChangeText={text => this.setState({ companyName: text })}
                  />
                  <Icon active name="md-time" />
                </Item>
              </CardItem>
            )}

            {this.state.allowTokens && (
              <CardItem style={{ justifyContent: "flex-end" }}>
                <Button
                  style={{ backgroundColor: "#00BF8C", borderRadius: 25 }}
                >
                  <Text>Done</Text>
                </Button>
              </CardItem>
            )}
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

class TokenUpdate extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, padding: 15 }}>
        <Card style={{ padding: 2 }}>
          <CardItem>
            <Left>
              <Label>ETA next Token : </Label>
              <Item>
                <Text> 15</Text>
              </Item>
            </Left>
          

          <Left>
            <Label>Remaining : </Label>
            <Item>
              <Text> 15</Text>
            </Item>
          </Left>
          </CardItem>
        </Card>

        <Card>
          <View
            style={{
              padding: 25,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 180, color: "#00BF8C" }}>05</Text>
          </View>

          <View style={styles.btnContainer}>
            <Button
              onPress={() => this.loginFB()}
              iconRight
              large
              style={{
                backgroundColor: "#00BF8C",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 15
              }}
            >
              <Text>Done</Text>
            </Button>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start"
  },
  btnContainer: {
    height: 150,
    padding: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly"
  }
});
