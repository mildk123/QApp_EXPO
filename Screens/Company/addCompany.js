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
    console.log(date)
    // this.setState({
    //   estDate: date
    // });
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
          <Form>
            <Item stackedLabel>
              <Label>Company Name</Label>
              <Input />
            </Item>

            <View style={{ height: 70 }}>
              <Text>Established Since : </Text>
              {!this.state.estDate ? <Text>Please select date of establishment</Text> : <Text>{this.state.estDate}</Text>}

              <Button 
              title="Select Date" 
              onPress={this._showDateTimePicker} 
              style={{width: 200}} 
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
