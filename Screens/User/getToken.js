import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Card from '../../components/Card';
import Header from '../../Helper/Header'

export class getToken extends Component {

  static navigationOptions = {
    header : null
  }

  render() {
    return (
      <View style={styles.container}>
      <Header
          headerColor="#00BF8C"
          icon={"ios-arrow-round-back"}
          title={"Get your Token"}
          hasTabs={"false"}
          searchBtn={false}
          favBtn={true}
          threeDots={true}
          {...this.props}
          goBack={true}
        />
        <Card />
      </View>
    )
  }
}

export default getToken;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});

