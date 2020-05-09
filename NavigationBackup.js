



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';


import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'


export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const AppNavigator = createStackNavigator({
  StartScreen: {
    screen: StartScreen
  },
  QuoteScreen: {
    screen: QuoteScreen
  }
});

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
