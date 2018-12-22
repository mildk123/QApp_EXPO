import React, { Component } from "react";
import { View, DatePickerAndroid } from "react-native";
import { Input, Icon, Button, Text } from "native-base";

export default class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      selectedDate: {
        day: "Since :",
        month: "",
        year: ""
      }
    };
  }

  openDate = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(2014, 6, 25)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        await this.props.getDate(year, month, day);
        this.setState({
          selectedDate: {
            year,
            month,
            day
          }
        });
      }
    } catch ({ code, message }) {
      alert("Cannot open date picker", message);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        {this.state.selectedDate.day === "Since :" ? (
          <Icon active name={"md-calendar"} style={{ fontSize: 32 }} />
        ) : (
          <Icon
            onPress={() =>
              this.setState({
                selectedDate: { year: "Since :", month: "", day: "" }
              })
            }
            active
            name={"ios-remove-circle-outline"}
            style={{ fontSize: 32, color: "red" }}
          />
        )}
        <Input
          value={`${this.state.selectedDate.day}-${
            this.state.selectedDate.month
          }-${this.state.selectedDate.year}`}
        />
        <Button onPress={() => this.openDate()}>
          <Text>Select Date</Text>
        </Button>
      </View>
    );
  }
}
