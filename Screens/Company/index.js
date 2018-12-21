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
      isLoading: true
    };
  }

  componentDidMount = async () => {
    let uid = await firebase.auth().currentUser.uid;
    database.child("companies/").on("child_added", callback => {
      if (uid === callback.key) {
        let myCompany = callback.val();
        this.setState({
          isLoaded: true,
          isLoading: false,
          company: {
            companyDetails: myCompany.companyDetails,
            companyName: myCompany.companyName,
            selectedDate: myCompany.selectedDate,
            selectedTime: myCompany.selectedTime,
            uid: myCompany.uid
          }
        });
      }
    });
  };

  addCompany = () => {
    this.props.navigation.navigate("addCompany");
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { isLoading, isLoaded, company } = this.state;
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
              <Icon style={{fontSize: 52}} name="md-add-circle-outline" />
            </Fab>
          </View>
        </Container>
      );
    if (!isLoaded || !company) return <Text>No Data Found</Text>;

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
              <ListItem avatar>
                <Left>
                  <Icon
                    style={{ fontSize: 30, color: "green" }}
                    active
                    name="ios-business"
                  />
                </Left>
                <Body>
                  <Text>{company.companyName}</Text>
                  <Text note>
                    Timmings : {company.selectedTime.hour}:{company.selectedTime.minute}
                  </Text>
                  <Text note>
                    Established Since : {company.selectedDate.day}-{company.selectedDate.month}-{company.selectedDate.year}
                  </Text>
                  <Text note>
                    Category : {company.companyDetails.categories[0].name}
                  </Text>
                  <Text note>
                    Address : {company.companyDetails.location.address}
                  </Text>
                  <Text note>
                    City : {company.companyDetails.location.city}
                  </Text>
                  <Text note>
                    Postal Code : {company.companyDetails.location.postalCode}
                  </Text>
                </Body>

                <Right>
                  <Button onPress={() => this.moreInfo()}>
                    <Text>More</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>

          <View style={{ flex: 1 }}>
            <Fab
              style={{ backgroundColor: "#00BF8C" }}
              position="bottomRight"
              onPress={() => this.addCompany()}
            >
              <Icon style={{fontSize: 52}} name="md-add-circle-outline" />
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
