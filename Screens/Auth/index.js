import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Facebook } from 'expo'

import { createStackNavigator } from "react-navigation";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";

import firebase from "../../config/firebase";

class Authentication extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount(){

    firebase.auth().onAuthStateChanged(user => {
      if (user){
        console.log(user);
        
      }
    })

  }

  loginFB = async () => {

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "2484863974917731",
      { permissions: ["public_profile"] }
    );
      
    if (type === "success") {

      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      
      firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then(success => console.log(success))
        .catch(err => console.log(err));
    }
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
          {/* <Button
            onPress={() => this.loginFB()}
            title="Sign Up"
            iconRight
            icon={<Icon name="facebook-square" size={20} color="white" />}
            buttonStyle={{
              backgroundColor: "#3C5A99",
              width: 150,
              height: 55,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
          /> */}
          <Button
            onPress={() => this.loginFB()}
            title="Login"
            iconRight
            icon={<Icon name="facebook-square" size={20} color="white" />}
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
    );
  }
}

export default (AuthStackNavigator = createStackNavigator({
  Auth: Authentication
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start"
  },
  imgContainer: {
    height: 850,
    maxHeight: "100%",
    padding: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  picSize: {
    maxHeight: 360,
    maxWidth: 360
  },
  btnContainer: {
    height: 150,
    padding: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly"
  }
});
