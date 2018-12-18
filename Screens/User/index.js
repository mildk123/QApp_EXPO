import React, { Component } from "react";

import { Container, View, Fab } from "native-base";
import Header from "../../Helper/Header";
import Icon from "react-native-vector-icons/AntDesign";

export class User extends Component {
  addCompany = () => {
    console.log(123123);
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header
          headerColor="#00BF8C"
          icon={"menu"}
          title={"User"}
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

export default User;
