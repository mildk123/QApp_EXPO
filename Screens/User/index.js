import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  Spinner,
  Icon,
  Input,
  Item
} from "native-base";
import Header from "../../Helper/Header";

import firebase from "../../config/firebase";
const database = firebase.database().ref();

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isLoading: true,
      companyList: []
    };
  }

  static navigationOptions = {
    header : null
  };

  getOnMap = (index) => {
    let selectedVenue = this.state.companyList[index]

    let name = selectedVenue.companyName
    let lat = selectedVenue.companyDetails.location.lat
    let lng = selectedVenue.companyDetails.location.lng
    this.props.navigation.navigate("MapCompany", {
      latlng: { lat, lng },
      name: name
    });
  };

  getToken = (index) => {
    let selectedVenue = this.state.companyList[index]
    this.props.navigation.navigate('getToken', {selectedVenue})
  }

  componentDidMount = async () => {
      let uid = await firebase.auth().currentUser.uid;
      database.child("companies/").on('child_added', callback => {
        let companiesUID =  callback.key
        database.child("companies/").child(companiesUID).on('child_added', callback => {
          
          let companyData =  callback.val()

          this.setState({
          isLoaded: true,
          isLoading: false,
          companyList: [
            ...this.state.companyList,
            {
              companyDetails: companyData.companyDetails,
              companyName: companyData.companyName,
              selectedDate: companyData.selectedDate,
              selectedTime: companyData.selectedTime,
              uid: companyData.uid
            }
          ]
        });
        })
        
  
        

      });
    };
  

  onChange = Term => {
    this.setState({
      searchTerm: Term
    });
  };

  render() {
    const { isLoading, isLoaded, companyList } = this.state;
    if (isLoading)
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
            {...this.props}
          />
          <Content>
            <View style={{ padding: 5 }}>
              <Item>
                <Input
                  placeholder="Search Your Place Name"
                  onChangeText={Text => this.onChange(Text)}
                />
                <Button
                  style={{ padding: 12 }}
                  iconLeft
                  onPress={() => this.searchVenues()}
                >
                  <Icon name="ios-search" />
                  <Text>Search</Text>
                </Button>
              </Item>
            </View>
            <Spinner />
          </Content>
        </Container>
      );
    if (!isLoaded || !companyList) return <Text>No Data Found</Text>;
    return (
      <View style={styles.container}>
        <Container>
        <Header
            headerColor="#00BF8C"
            icon={"menu"}
            title={"Companies"}
            hasTabs={"false"}
            searchBtn={false}
            favBtn={true}
            threeDots={true}
            {...this.props}
          />
          <Content>
            <View style={{ padding: 5 }}>
              <Item>
                <Input
                  placeholder="Search Your Place Name"
                  onChangeText={Text => this.onChange(Text)}
                />
                <Button
                  style={{ padding: 12 }}
                  iconLeft
                  onPress={() => this.searchVenues()}
                >
                  <Icon name="ios-search" />
                  <Text onPress={() => this.searchVenues()}>Search</Text>
                </Button>
              </Item>
            </View>

            <List>
                {companyList.map((item, index) => {
                  console.log(item)
                  return (
                    <ListItem
                      avatar
                      key={index}
                    >
                      <Left>
                        <Icon style={{ fontSize: 30 }} active name="ios-pin" />
                      </Left>

                      {/* <Body>
                        <Text>{item.companyName}</Text>
                        <Text note>
                          Address : {item.companyDetails.location.formattedAddress[0]},{" "}
                          {item.companyDetails.location.formattedAddress[2]}{" "}
                        </Text>
                        <Text note>
                          Postal : {item.companyDetails.location.formattedAddress[2]}</Text>
                      </Body> */}

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

                      <Right style={{flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Button info style={{width: 170}} onPress={() => this.getToken(index)}>
                        <Icon name='md-disc' />
                          <Text>Get Token</Text>
                        </Button>
                        <Button success style={{width: 170}} onPress={() => this.getOnMap(index)}>
                          <Icon name='ios-pin' />
                          <Text>Get Directions</Text>
                        </Button>
                      </Right>
                    </ListItem>
                  );
                })}
            </List>
          </Content>
        </Container>
      </View>
    );
  }
}

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
