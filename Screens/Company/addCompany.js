import React, { Component } from "react";

import { StyleSheet, View, TouchableHighlight } from "react-native";

import { Container, Item, Input, Icon, Button,Thumbnail , Text } from "native-base";

import DateTimePicker from "react-native-modal-datetime-picker";

import Header from "../../Helper/Header";

import { ImagePicker } from 'expo'

class Company extends Component {
  constructor() {
    super();
    this.state = {
      isDatePickerVisible: false,
      isTimePickerVisible: false,
    };
  }

  static navigationOptions = {
    header: null
  };

  showModal = key => this.setState({ [key]: true });

  hideModal = key => this.setState({ [key]: false });

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

  imageSelect = async (pic) => {
    // let result = await ImagePicker.launchCameraAsync()
    let result = await ImagePicker.launchImageLibraryAsync()

    if (!result.cancelled) {
      await this.setState({
        [pic] : result.uri
      })
    }
  }

  render() {
    const { pic1 , pic2 , pic3 } = this.state
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
              onFocus={() => this.showModal("isDatePickerVisible")}
            />
            <Icon
              active
              name="md-calendar"
              style={{ fontSize: 32 }}
              onPress={() => this.showModal("isDatePickerVisible")}
            />
            <DateTimePicker
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={() => this.hideModal("isDatePickerVisible")}
              mode="date"
            />
          </Item>

          <Item>
            <Input
              placeholder="Add Timmings"
              value={this.state.selectedTime}
              onFocus={() => this.showModal("isTimePickerVisible")}
            />
            <Icon
              active
              name="ios-clock"
              style={{ fontSize: 32 }}
              onPress={() => this.showModal("isTimePickerVisible")}
            />
            <DateTimePicker
              isVisible={this.state.isTimePickerVisible}
              onConfirm={this._handleTimePicked}
              onCancel={() => this.hideModal("isTimePickerVisible")}
              mode="time"
            />
          </Item>

          <View>
          <Text style={{margin: 10, fontSize: 22, fontStyle: 'italic'}}>Certificates: </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

          <TouchableHighlight onPress={() => this.imageSelect('pic1')}>
          <Thumbnail large source={pic1 ? {uri: pic1} : (require('../../assets/placeholder/person_place.png')) } />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.imageSelect('pic2')}>
          <Thumbnail large source={pic2 ? {uri: pic2} : (require('../../assets/placeholder/person_place.png')) } />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.imageSelect('pic3')}>
          <Thumbnail large source={pic3 ? {uri: pic3} : (require('../../assets/placeholder/person_place.png')) } />
          </TouchableHighlight>

          </View>


            {/* <Button 
            onPress={this.imageSelect}
            bordered 
            style={{alignSelf: 'flex-end'}}>
              <Text>Select</Text>
            </Button> */}
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

