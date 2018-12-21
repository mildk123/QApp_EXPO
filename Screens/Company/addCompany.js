import React, { Component } from "react";

import { StyleSheet, View, TouchableHighlight } from "react-native";

import DatePicker from "../../components/datePicker";
import TimePicker from "../../components/timePicker";

import {
  Container,
  Item,
  Input,
  Icon,
  Button,
  Thumbnail,
  Text
} from "native-base";
import Header from "../../Helper/Header";
import { ImagePicker } from "expo";

import firebase from "../../config/firebase";

const database = firebase.database().ref();

class Company extends Component {
  constructor() {
    super();
    this.state = {
      isTimePickerVisible: false
    };
  }

  static navigationOptions = {
    header: null
  };

  imageSelect = async pic => {
    // let result = await ImagePicker.launchCameraAsync()
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      await this.setState({
        [pic]: result.uri,
        certificates: {
          [pic]: result.uri
        }
      });
    }
  };

  getDate = (year, month, day) => {
    this.setState({
      selectedDate: {
        day,
        month,
        year
      }
    });
  };

  getTime = (hour, minute) => {
    this.setState({
      selectedTime: {
        hour,
        minute
      }
    });
  };

  next = () => {
    let companyName = this.state.companyName;
    let selectedDate = this.state.selectedDate;
    let selectedTime = this.state.selectedTime;

    if (companyName && selectedDate && selectedTime) {
      let uid = firebase.auth().currentUser.uid
      database.child("companies/" + uid).set(
        {
          companyName,
          selectedDate,
          selectedTime,
          uid,
        },
        () => {
          this.props.navigation.navigate("Address");
        }
      );
    }
  };

  render() {
    const { pic1, pic2, pic3 } = this.state;
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
          {...this.props}
          goBack={true}
        />

        <View style={styles.container}>
          <Item>
            <Icon active name="home" />
            <Input
              placeholder="Company name"
              onChangeText={text => this.setState({ companyName: text })}
            />
          </Item>

          <Item style={{ padding: 10 }}>
            <DatePicker getDate={this.getDate} />
          </Item>

          <Item style={{ padding: 10 }}>
            <TimePicker getTime={this.getTime} />
          </Item>

          <View>
            <Text style={{ margin: 10, fontSize: 22, fontStyle: "italic" }}>
              Certificates:
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableHighlight onPress={() => this.imageSelect("pic1")}>
                <Thumbnail
                  large
                  source={
                    pic1
                      ? { uri: pic1 }
                      : require("../../assets/placeholder/person_place.png")
                  }
                />
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.imageSelect("pic2")}>
                <Thumbnail
                  large
                  source={
                    pic2
                      ? { uri: pic2 }
                      : require("../../assets/placeholder/person_place.png")
                  }
                />
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.imageSelect("pic3")}>
                <Thumbnail
                  large
                  source={
                    pic3
                      ? { uri: pic3 }
                      : require("../../assets/placeholder/person_place.png")
                  }
                />
              </TouchableHighlight>
            </View>

            <View style={{ padding: 120 }}>
              <Button
                large
                onPress={this.next}
                bordered
                style={{
                  alignSelf: "center",
                  borderRadius: 50,
                  width: 124,
                  justifyContent: "center"
                }}
              >
                <Text>Next</Text>
              </Button>
            </View>
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
  }
});
