import React, { Component } from "react";
import { View, TimePickerAndroid } from "react-native";
import { Input, Icon, Button, Text } from "native-base";

export default class TimePicker extends Component {
  constructor() {
    super();
    this.state = {
      selectedTime: {
        Hours: "Hours",
        Minute: "Minute"
      }
    };
  }

  openTime = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
        mode : 'spinner'
      });
      
      if (action !== TimePickerAndroid.dismissedAction) {
        await this.props.getTime(hour, minute);
        console.log('action, hour, minute', action, hour, minute)
        this.setState({
            selectedTime: {
            Hours : hour,
            Minute : minute
          }
        });
      }
    } catch ({ code, message }) {
      console.log("Cannot open time picker", message);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        {this.state.selectedTime.Hours === "Hours" ? (
          <Icon active name={"md-time"} style={{ fontSize: 32 }} />
        ) : (
          <Icon
            onPress={() =>
              this.setState({
                selectedTime: { Hours: "Hours", Minute: "Minute"}
              })
            }
            active
            name={"ios-remove-circle-outline"}
            style={{ fontSize: 32, color: "red" }}
          />
        )}
        <Input
          value={`${this.state.selectedTime.Hours}:${
            this.state.selectedTime.Minute
          }`}
        />
        <Button onPress={() => this.openTime()}>
          <Text>Select Time</Text>
        </Button>
      </View>
    );
  }
}
