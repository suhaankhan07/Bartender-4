import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import Welcome from './screens/SignupLoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator'

export default function App() {
  return (
   <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: Welcome},
  AppNavigator:{screen: AppTabNavigator},
});

const AppContainer = createAppContainer(switchNavigator)