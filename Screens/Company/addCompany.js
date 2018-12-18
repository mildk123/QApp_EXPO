import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

import { Container, Item, Input, Icon } from "native-base";

import DateTimePicker from "react-native-modal-datetime-picker";

import Header from "../../Helper/Header";

class Company extends Component {
  constructor() {
    super();
    this.state = {
      isDatePickerVisible: false,
      isTimePickerVisible : false
    };
  }

  static navigationOptions = {
    header: null
  };

  showModal = key => this.setState({ [key] : true });

  hideModal = key => this.setState({ [key] : false });

  _handleDatePicked = date => {
    let dates = JSON.stringify(date);

    let splitedDate = dates.split(dates, 2, 11);
    console.log(splitedDate);
    this.setState({
      selectedDate: splitedDate
    });

    this.hideModal();
  };

  _handleTimePicked = Time => {
    let Times = JSON.stringify(Time);

    let splitedTime = Times.split(Times, 2, 11);
    console.log(splitedTime);
    this.setState({
      selectedTime: splitedTime
    });

    this.hideModal();
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
          <Item>
            <Icon active name="home" />
            <Input placeholder="Company name" />
          </Item>

          <Item>
            <Input
              placeholder="Established since"
              value={this.state.selectedDate}
              onFocus={() => this.showModal('isDatePickerVisible')}
            />
            <Icon
              active
              name="md-calendar"
              style={{ fontSize: 32 }}
              onPress={() => this.showModal('isDatePickerVisible')}
            />
            <DateTimePicker
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={() => this.hideModal('isDatePickerVisible')}
              mode="date"
            />
          </Item>

          <Item>
            <Input
              placeholder="Add Timmings"
              value={this.state.selectedTime}
              onFocus={() => this.showModal('isTimePickerVisible')}
            />
            <Icon
              active
              name="ios-clock"
              style={{ fontSize: 32 }}
              onPress={() => this.showModal('isTimePickerVisible')}
            />
            <DateTimePicker
              isVisible={this.state.isTimePickerVisible}
              onConfirm={this._handleTimePicked}
              onCancel={ () => this.hideModal('isTimePickerVisible')}
              mode='time'
            />
          </Item>

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
