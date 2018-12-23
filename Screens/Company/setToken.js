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
  ListItem
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
                {this.state.allowTokens ? <Text>Add Tokens </Text> : <Text>No Tokens today </Text>}
              </Body>
            </ListItem>

            {this.state.allowTokens && <CardItem>
              <Label>Total Tokens : </Label>
              <Item style={{ width: 200 }}>
                <Input 
                  keyboardType="number-pad"
                  onChangeText={text => this.setState({ companyName: text })}
                />
                <Icon active name="ios-help-buoy" />
              </Item>
            </CardItem>}

            {this.state.allowTokens && <CardItem>
              <Label>Time for each Token : </Label>
              <Item style={{ width: 150 }}>
                <Input
                  keyboardType="number-pad"
                  onChangeText={text => this.setState({ companyName: text })}
                />
                <Icon active name="md-time" />
              </Item>
            </CardItem>}

            {this.state.allowTokens && <CardItem style={{ justifyContent: "flex-end" }}>
              <Button
                style={{ backgroundColor: "#00BF8C", borderRadius: 25 }}
              >
                <Text>Done</Text>
              </Button>
            </CardItem>}

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
