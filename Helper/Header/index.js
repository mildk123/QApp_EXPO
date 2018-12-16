import React, { Component } from "react";
import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";

class HeaderComp extends Component {
  constructor () {
    super()
  }
  
  render() {
    return (
      <Header
      style={{ marginTop: 24, backgroundColor: this.props.headerColor }}
      iosBarStyle={"dark-content"}
      hasTabs={this.props.tabs}
      >
        <Left>
          <Button
            onPress={() => this.props.navigation.toggleDrawer()}
            transparent
          >
            <Icon name={this.props.icon} />
          </Button>
        </Left>

        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          {this.props.searchBtn && (
            <Button transparent>
              <Icon name="search" />
            </Button>
          )}

          {this.props.favBtn && (
            <Button transparent>
              <Icon name="heart" />
            </Button>
          )}

          {this.props.threeDots && (
            <Button transparent>
              <Icon name="more" />
            </Button>
          )}
        </Right>
      </Header>
    );
  }
}

export default HeaderComp;
