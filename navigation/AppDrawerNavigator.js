import React from "react";
import { createDrawerNavigator } from "react-navigation";


// import MainTabNavigator from "./MainTabNavigator";
import { Button } from 'react-native-elements'
import SignOut from "../components/Sign Out";


export default createDrawerNavigator({
  // Store : MainTabNavigator,
  'Sign out' : SignOut
});
