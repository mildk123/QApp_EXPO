import React from "react";
import { createDrawerNavigator } from "react-navigation";

// import MainAppNav from './MainAppNav'
import HomeStackNavigator from '../Screens/Homescreen'
import SignOut from "../components/Sign Out";


export default createDrawerNavigator({
  Main : HomeStackNavigator,
  'Sign out' : SignOut
});


