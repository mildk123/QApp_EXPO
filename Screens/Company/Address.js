import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
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
import { Location, Permissions } from "expo";

import firebase from "../../config/firebase";
const database = firebase.database().ref();

class Address extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
    this.state = {
      isLoaded: false,
      isLoading: true,
      searchTerm: "khan"
    };
  }

  static navigationOptions = {
    title: "Select Location"
  };

  componentDidMount = () => {
    this.searchVenues();
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  searchVenues = async () => {
    let searchQuery = this.state.searchTerm;

    fetch(
      `https://api.foursquare.com/v2/venues/search?query=${searchQuery}&limit=25&ll=24.9,67&client_id=0KBKAJO2Y4NWYLRXL4XDBKPEGG45EVHHIPKX5G32GTQGKNSS&client_secret=ZZOQY3QLIOGQ3FFHWQKZUIIH0KKTLQPOHFON001XQQDUEQOS&v=20181024`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let dataX = data.response.venues;

        this.setState({
          venuesList: dataX,
          isLoaded: true,
          isLoading: false
        });
      })
      .catch(error => error);
  };

  selectVenue = async index => {
    try {
      let companyDetails = this.state.venuesList[index];
      let uid = firebase.auth().currentUser.uid;

      database.child("companies/" + uid).update(
        {
          companyDetails
        },
        () => {
          this.props.navigation.navigate("Company");
        }
      );
      
      // return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  };

  viewOnMap = (lat, lng, name) => {
    this.props.navigation.navigate("MapCompany", {
      latlng: { lat, lng },
      name: name
    });
  };

  onChange = Term => {
    this.setState({
      searchTerm: Term
    });
  };

  render() {
    const { isLoading, isLoaded, venuesList } = this.state;
    if (isLoading)
      return (
        <Container>
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
    if (!isLoaded || !venuesList) return <Text>No Data Found</Text>;
    return (
      <View style={styles.container}>
        <Container>
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
              {venuesList &&
                venuesList.map((venue, index) => {
                  return (
                    <ListItem
                      avatar
                      onPress={() =>
                        this.viewOnMap(
                          venue.location.lat,
                          venue.location.lng,
                          venue.name
                        )
                      }
                      key={index}
                    >
                      <Left>
                        <Icon style={{ fontSize: 30 }} active name="ios-pin" />
                      </Left>
                      <Body>
                        <Text>{venue.name}</Text>
                        <Text note>
                          Address : {venue.location.formattedAddress[0]},{" "}
                          {venue.location.formattedAddress[2]}{" "}
                        </Text>
                        <Text note>
                          Postal : {venue.location.formattedAddress[2]},{" "}
                          {venue.location.formattedAddress[2]}{" "}
                        </Text>
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

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
