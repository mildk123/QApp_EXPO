import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, View, Image } from "react-native";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../Helper/Header";

import CompanyStackNavigator from '../Company'
import addCompany from '../Company/addCompany';
import setToken from '../Company/setToken'
import Address from "../Company/Address";
import MapCompany from "../Company/mapCompany";

import User from '../User'
import getToken from '../User/getToken'

class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };

  moveTo = name => {
    this.props.navigation.navigate(name);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.picSize}
            source={require("../../assets/icon.png")}
          />
        </View>

        <View style={styles.btnContainer}>

          <Button
            onPress={() => this.moveTo("Company")}
            title="Are you a company?"
            icon={<Icon name="ios-business" size={20} color="white" />}
            buttonStyle={{
              backgroundColor: "#00BF8C",
              width: '100%',
              padding: 10,
              maxWidth: 620,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
          />

          <Button
            onPress={() => this.moveTo("User")}
            title="Are you finding/waiting for tokens?"
            icon={<Icon name="md-person" size={20} color="white" />}
            buttonStyle={{
              backgroundColor: "#00BF8C",
              width: '100%',
              padding: 10,
              maxWidth: 620,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
          />

        </View>
      </View>
    );
  }
}


export default HomeStackNavigator =  createStackNavigator({
  Homescreen : Homescreen,
  
  Company : CompanyStackNavigator,
  addCompany: addCompany,
  Address: Address,
  setToken : setToken,
  
  MapCompany : MapCompany,
  
  User : User,
  getToken : getToken 
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start"
  },
  imgContainer: {
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  picSize: {
    maxHeight: 360,
    maxWidth: 360
  },
  btnContainer: {
    height: 120,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
