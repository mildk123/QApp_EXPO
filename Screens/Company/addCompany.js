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

    let splitedDate = dates.split(dates, 2, 11);
    console.log(splitedDate);
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
          <View style={{ marginBottom: 10 }}>
            <Item stackedLabel>
              <Label>Company Name :</Label>
              <Input />
            </Item>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Item stackedLabel style={{marginBottom: 10}}>
              <Label>Established Since : </Label>
              <Input />
            </Item>

            {this.state.estDate && <Text>{this.state.estDate}</Text>}

            <Button
              title="Select Date"
              onPress={this._showDateTimePicker}
              buttonStyle={{
                alignSelf: "flex-end",
                backgroundColor: "#3C5A99",
                width: "100%",
                maxWidth: 150,
                padding: 10,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 10
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

          <View style={{ marginBottom: 10 }}>
            <Item stackedLabel style={{marginBottom: 10}}>
              <Label>Timmings : </Label>
              <Input />
            </Item>

            <Button
              title="Select Time"
              onPress={this._showDateTimePicker}
              buttonStyle={{
                alignSelf: "flex-end",
                backgroundColor: "#3C5A99",
                width: "100%",
                maxWidth: 150,
                padding: 10,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 10
              }}
            />
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode="time"
              datePickerModeAndroid="default"
              is24Hour={true}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <Item stackedLabel style={{marginBottom: 10}}>
              <Label>Address : </Label>
              <Input />
            </Item>
            </View>

          <Button
            title="Done"
            onPress={this._showDateTimePicker}
            buttonStyle={{
              alignSelf: "flex-end",
              backgroundColor: "red",
              width: "100%",
              maxWidth: 150,
              padding: 10,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 10
            }}
          />
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
    backgroundColor: "#ffffff"
  },
  btnContainer: {
    height: 150,
    padding: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly"
  }
});
