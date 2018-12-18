import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";
import { Container, Form, Item, Input, Label } from "native-base";
import { Button } from "react-native-elements";

import DateTimePicker from "react-native-modal-datetime-picker";

import Header from "../../Helper/Header";

class Company extends Component {
  constructor() {
    super();
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  static navigationOptions = {
    header: null
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    let dates = JSON.stringify(date);

    let splitedDate = dates.splice(1, 11)

    this.setState({
      estDate: splitedDate
    });

    this._hideDateTimePicker();
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
          <View style={{ height: 100 }}>
            <Item stackedLabel>
              <Label>Company Name</Label>
              <Input />
            </Item>
          </View>

          <View style={{ height: 140 }}>
            <Label>Established Since : </Label>
            {this.state.estDate ? (
              <Text>{this.state.estDate}</Text>
            ) : (
              <Text>Please select date of establishment</Text>
            )}

            <Button
              title="Select Date"
              onPress={this._showDateTimePicker}
              buttonStyle={{
                backgroundColor: "#3C5A99",
                width: 250,
                height: 55,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
            />

            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode="date"
              datePickerModeAndroid="default"
              is24Hour={true}
            />
          </View>

          <View style={{ height: 100 }}>
            <Item stackedLabel last>
              <Label>Timings</Label>
              <Input />
            </Item>
          </View>

          <View style={{ height: 100 }}>
            <Item stackedLabel last>
              <Label>Address </Label>
              <Input />
            </Item>
          </View>

          <View>
            <Button
              onPress={() => this.loginFB()}
              title="Add"
              buttonStyle={{
                backgroundColor: "#3C5A99",
                width: 250,
                height: 55,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
            />
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
