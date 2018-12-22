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


  
  viewOnMap = (lat, lng, name) => {
    this.props.navigation.navigate("MapCompany", {
      latlng: { lat, lng },
      name: name
    });
  };

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
                  return (
                    <ListItem
                      avatar
                      onPress={() =>
                        this.viewOnMap(
                          item.location.lat,
                          item.location.lng,
                          item.companyName
                        )
                      }
                      key={index}
                    >
                      <Left>
                        <Icon style={{ fontSize: 30 }} active name="ios-pin" />
                      </Left>
                      <Body>
                        <Text>{item.companyName}</Text>
                        <Text note>
                          Address : {item.companyDetails.location.formattedAddress[0]},{" "}
                          {item.companyDetails.location.formattedAddress[2]}{" "}
                        </Text>
                        <Text note>
                          Postal : {item.companyDetails.location.formattedAddress[2]}</Text>
                      </Body>

                      <Right>
                        <Button onPress={() => this.selectVenue(index)}>
                          <Text>Select</Text>
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
