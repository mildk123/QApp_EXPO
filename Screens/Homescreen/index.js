import React, { Component } from "react";
import { Text, View } from "react-native";

class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View>
        <Text> Homescreen </Text>
      </View>
    );
  }
}

export default Homescreen;
