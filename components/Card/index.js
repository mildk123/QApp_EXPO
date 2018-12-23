import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 1, flexDirection: "column", padding: 3 }}>
            <CardItem>
              <Left>
                <Icon name="ios-radio-button-on" />
                <Body>
                  <Text>Total Token </Text>
                  <Text>April 15, 2016</Text>
                </Body>
              </Left>

              <Right>
                <Body>
                  <Text>Current Token </Text>
                  <Text>April 15, 2016</Text>
                </Body>
              </Right>
              <Icon name="ios-nuclear" />
            </CardItem>

            <CardItem>
              <Left>
                <Icon name="ios-time" />
                <Body>
                  <Text>Average Token Time </Text>
                  <Text>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem style={{justifyContent: 'flex-end'}}>
              
                <Button large style={{backgroundColor: 'red', borderRadius: 25}}>
                  <Text >1,926 stars</Text>
                  <Icon name="md-add" />
                </Button>
              
            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}
