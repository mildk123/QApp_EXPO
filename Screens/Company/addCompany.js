import React, { Component } from "react";

import { View } from "native-base";

import { Container, Form, Item, Input, Label } from "native-base";
import { StyleSheet } from 'react-native'
import Date from "../../Helper/DatePicker";
import Header from "../../Helper/Header";

import Icon from "react-native-vector-icons/AntDesign";

export class Company extends Component {
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

        <View style={styles.Container}>
          <Form>
            <Item stackedLabel>
              <Label>Name of company</Label>
              <Input />
            </Item>

            <View style={{height: 70}}>
              <Label>Established Since</Label>

              <Date />
            </View>

            <Item stackedLabel last>
              <Label>Timings</Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label>Address </Label>
              <Input />
            </Item>
          </Form>
        </View>

      </Container>
    );
  }
}

export default Company;

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