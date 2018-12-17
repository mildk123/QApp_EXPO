import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

import Homescreen from "../Screens/Homescreen";
import Messages from "../Screens/Homescreen";
import Cart from "../Screens/Homescreen";
import Settings from "../Screens/Homescreen";

const HomeStack = createStackNavigator({
  Home: {
    screen: Homescreen
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <Octicons color={tintColor} size={34} name="home" />
    ) : (
      <Octicons color="#b29f94" size={30} name="home" />
    )
};

const MessagesStack = createStackNavigator({
  Messages: Messages
});

MessagesStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialIcons color={tintColor} size={34} name="chat" />
    ) : (
      <MaterialIcons color="#b29f94" size={30} name="chat-bubble-outline" />
    )
};

const CartStack = createStackNavigator({
  Cart: Cart
});

CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialCommunityIcons color={tintColor} size={34} name="cart" />
    ) : (
      <MaterialCommunityIcons color="#b29f94" size={30} name="cart-outline" />
    )
};

const SettingsStack = createStackNavigator({
  Settings: Settings
});

SettingsStack.navigationOptions = {
  tabBarLabel: "SettingsStack",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialIcons color={tintColor} size={34} name="person" />
    ) : (
      <MaterialIcons color="#b29f94" size={30} name="person-outline" />
    )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MessagesStack,
    CartStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#ffffff",
      inactiveTintColor: "#DA22FF",
      style: {
        backgroundColor: "#8E54E9" // TabBar background
      }
    }
  }
);
