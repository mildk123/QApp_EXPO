import React, { Component } from "react";

import { StyleSheet } from "react-native";
import { Container, Form, Item, Input, Label, View } from "native-base";
import { Button } from 'react-native-elements'

import Header from "../../Helper/Header";


class Company extends Component {
  addCompany = () => {
    console.log(123123);
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header
          headerColor="#00BF8C"
          icon={"ios-arrow-round-back"}
          title={"Add Your Company"}
          hasTabs={"false"}
          searchBtn={false}
          favBtn={true}
          threeDots={true}
        />

        <View style={styles.container}>
          <Form>
            <Item stackedLabel>
              <Label>Name of company</Label>
              <Input />
            </Item>

            {/* <View style={{height: 70}}>
              <Label>Established Since</Label>

              <Date />
            </View> */}

            <Item stackedLabel last>
              <Label>Timings</Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label>Address </Label>
              <Input />
            </Item>
          </Form>
          <View>
            <Button title="Add" />
          </View>
        </View>
      </Container>
    );
  }
}

export default Company;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
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
