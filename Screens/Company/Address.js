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
  Thumbnail,
  Button,
  Spinner,
  Icon
} from "native-base";

import { Location, Permissions } from "expo";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isLoading: true,
      kidlist: []
    };
  }

  static navigationOptions = {
    title: "Select Location"
  };

  componentDidMount() {
    this.searchVenues();
  }

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

  searchVenues = () => {
    let searchQuery = "khan";

    fetch(
      `https://api.foursquare.com/v2/venues/search?query=${searchQuery}&limit=15&ll=24.9,67&client_id=0KBKAJO2Y4NWYLRXL4XDBKPEGG45EVHHIPKX5G32GTQGKNSS&client_secret=ZZOQY3QLIOGQ3FFHWQKZUIIH0KKTLQPOHFON001XQQDUEQOS&v=20181024`
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

  render() {
    const { isLoading, isLoaded, venuesList } = this.state;
    if (isLoading) return <Spinner />;
    if (!isLoaded || !venuesList) return null;
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <List>
              {venuesList &&
                venuesList.map((venue, index) => {
                  console.log(venue)
                  return (
                    <ListItem
                      avatar
                      onPress={() => this._viewMore(index)}
                      key={index}
                    >
                      <Left>
                      <Icon style={{fontSize:30}} active name="ios-pin" />
                      </Left>
                      <Body>
                        <Text>{venue.name}</Text>
                        <Text note>Addrress : {venue.location.formattedAddress[0]}, {venue.location.formattedAddress[2]}, {venue.location.formattedAddress[2]} </Text>
                      </Body>

                      <Right>
                        <Text note>3:43 pm</Text>
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
