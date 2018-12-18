import React, { Component } from "react";

import { View } from "native-base";

import { Container, Form, Item, Input, Label } from 'native-base';
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

        <View>
          <Form>
            <Item floatingLabel>
              <Label>Name of company</Label>
              <Input />
            </Item>
            
            <Item floatingLabel last>
              <Label>Since</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Timings</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
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
