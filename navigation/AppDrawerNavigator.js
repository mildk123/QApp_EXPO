import React from "react";
import { createDrawerNavigator } from "react-navigation";


import MainTabNavigator from "./MainTabNavigator";
import SignOut from "../components/Sign Out";


export default createDrawerNavigator({
  List : MainTabNavigator,
  'Sign out' : SignOut
});
