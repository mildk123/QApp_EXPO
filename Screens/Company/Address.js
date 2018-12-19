import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { Location, Permissions } from 'expo';
import { Button, Text } from "native-base";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Select Location'
  };

  componentDidMount() {
    this.searchVenues();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };


  searchVenues = () => {
    let searchQuery = 'khan';

    fetch(`https://api.foursquare.com/v2/venues/search?query=${searchQuery}&limit=10&ll=24.9,67&client_id=0KBKAJO2Y4NWYLRXL4XDBKPEGG45EVHHIPKX5G32GTQGKNSS&client_secret=ZZOQY3QLIOGQ3FFHWQKZUIIH0KKTLQPOHFON001XQQDUEQOS&v=20181024`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.response)
    })
    .catch(error => error)
    };


  render() {
    return (
      <View style={styles.container}>
        <Button><Text>search</Text></Button>
        
      </View>
    );
  }
}

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#ffffff"
  }
});
