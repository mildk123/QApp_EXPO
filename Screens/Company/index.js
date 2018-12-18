import React, { Component } from "react";

import { Container, View, Fab } from "native-base";
import { createStackNavigator } from "react-navigation";
import Header from "../../Helper/Header";
import Icon from "react-native-vector-icons/AntDesign";

import addCompany from "./addCompany";

export class Company extends Component {
  addCompany = () => {
    this.props.navigation.navigate("addCompany");
  };

  static navigationOptions = {
    header: null
}

  render() {
    return (
      <Container>
        <Header
          headerColor="#00BF8C"
          icon={"menu"}
          title={"Companies"}
          hasTabs={"false"}
          searchBtn={false}
          favBtn={true}
          threeDots={true}
        />
        <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: "#00BF8C" }}
            position="bottomRight"
            onPress={() => this.addCompany()}
          >
            <Icon name="pluscircle" />
          </Fab>
        </View>
      </Container>
    );
  }
}

// export default Company

export default createStackNavigator({
  Company: Company,
  addCompany: addCompany
});
