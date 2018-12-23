import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  Spinner,
  Fab,
  Icon
} from "native-base";
import Header from "../../Helper/Header";
// import Icon from "react-native-vector-icons/AntDesign";

import { createStackNavigator } from "react-navigation";
import addCompany from "./addCompany";

import firebase from "../../config/firebase";
const database = firebase.database().ref();

class Company extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      isLoading: true,
      companyList: []
    };
  }

  componentDidMount = async () => {
    let uid = await firebase.auth().currentUser.uid;
    database.child("companies/" + uid).on("child_added", callback => {
      let myCompany = callback.val();

      this.setState({
        isLoaded: true,
        isLoading: false,
        companyList: [
          ...this.state.companyList,
          {
            companyDetails: myCompany.companyDetails,
            companyName: myCompany.companyName,
            selectedDate: myCompany.selectedDate,
            selectedTime: myCompany.selectedTime,
            uid: myCompany.uid
          }
        ]
      });
    });
  };

  addCompany = () => {
    this.props.navigation.navigate("addCompany");
  };

  setToken = (index) => {
    this.props.navigation.navigate('setToken');
  }
  
  static navigationOptions = {
    header: null
  };

  render() {
    const { isLoading, isLoaded, companyList } = this.state;
    if (isLoading)
      return (
        <Container>
          <Header
            headerColor="#00BF8C"
            icon={"menu"}
            title={"My Companies"}
            hasTabs={"false"}
            searchBtn={false}
            favBtn={false}
            threeDots={true}
            {...this.props}
          />
          <Content>
            <Spinner />
          </Content>

          <View style={{ flex: 1 }}>
            <Fab
              style={{ backgroundColor: "#00BF8C" }}
              position="bottomRight"
              onPress={() => this.addCompany()}
            >
              <Icon style={{ fontSize: 52 }} name="md-add-circle-outline" />
            </Fab>
          </View>
        </Container>
      );
    if (!isLoaded || !companyList) return <Text> No Data Found </Text>;

    return (
      <View style={styles.container}>
        <Container>
          <Header
            headerColor="#00BF8C"
            icon={"menu"}
            title={"My Companies"}
            hasTabs={"false"}
            searchBtn={false}
            favBtn={true}
            threeDots={true}
            {...this.props}
          />

          <Content>
            <List>
              {companyList.map((item, index) => {
                  return <ListItem key={index} avatar>
                    <Left>
                      <Icon
                        style={{ fontSize: 30, color: "green" }}
                        active
                        name="ios-business"
                      />
                    </Left>
                    <Body>
                      <Text>{item.companyName}</Text>
                      <Text note>
                        Timmings : {item.selectedTime.hour}:
                        {item.selectedTime.minute}
                      </Text>
                      <Text note>
                        Established Since : {item.selectedDate.day}-
                        {item.selectedDate.month}-{item.selectedDate.year}
                      </Text>
                      <Text note>
                        Category : {item.companyDetails.categories[0].name}
                      </Text>
                      <Text note>
                        Address : {item.companyDetails.location.address}
                      </Text>
                      <Text note>
                        City : {item.companyDetails.location.city}
                      </Text>
                      <Text note>
                        Postal Code : {item.companyDetails.location.postalCode}
                      </Text>
                    </Body>

                    <Right>
                      <Button style={{borderRadius : 25}} onPress={() => this.setToken(index)}>
                        <Text>Set Token</Text>
                      </Button>
                    </Right>
                  </ListItem>
                })}
            </List>
          </Content>

          <View style={{ flex: 1 }}>
            <Fab
              style={{ backgroundColor: "#00BF8C" }}
              position="bottomRight"
              onPress={() => this.addCompany()}
            >
              <Icon style={{ fontSize: 52 }} name="md-add-circle-outline" />
            </Fab>
          </View>
        </Container>
      </View>
    );
  }
}

export default Company;

// export default createStackNavigator({
//   Company: Company,
//   addCompany: addCompany
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
