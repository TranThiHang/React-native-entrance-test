/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
} from "react-native"
import { StackNavigator } from 'react-navigation'
import firebase from 'firebase'
import { SwitchNavigator } from 'react-navigation'

import LoginScreen from './src/components/screens/LoginScreen'
import SplashScreen from './src/components/screens/SplashScreen'
import HomeScreen from './src/components/screens/HomeScreen'
import SignUp from './src/components/screens/HomeScreen'
import Loading from './src/components/screens/HomeScreen'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Splash' }
    console.log('Start')
    setTimeout(() => {
      console.log('Done')
      this.setState({ currentScreen: 'Login' })
    }, 5000)//after 2s auto transfer
  }
  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Splash' ? <SplashScreen /> : <LoginScreen />
    return mainScreen
    { App }
  }
}
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    LoginScreen,
    HomeScreen
  },
  {
    initialRouteName: 'Loading'
  }
)