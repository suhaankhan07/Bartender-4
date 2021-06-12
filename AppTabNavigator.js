import React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';


export const AppTabNavigator = createBottomTabNavigator({
 Exchange:{
    screens:ExchangeScreen,
    navigationOptions : {
     tabBarIcon: <Image  />,
     tabBarLabel: "Exchange"
    },
 },
 HomeScreen:{
  screens:HomeScreen,
  navigationOptions: {
      tabBarIcon: <Image />,
      tabBarLabel: "Home"
  }
 }
});