import React, { Component } from 'react'
import { AsyncStorage,  View } from 'react-native'

export class SignOut extends Component {
    constructor () {
        super()

        this.SignOut()
    }

    SignOut = async () => {
        await AsyncStorage.removeItem('userToken')

        this.props.navigation.navigate("Auth");
    }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default SignOut