import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';



import Navigation from './AppNavigator'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  
    return (
    <Navigation />     
      ); 
  
  
};

const styles = StyleSheet.create({
  
  relaxText: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  buttonText: {
    color: Colors.white
  },
  buttonImage: {
    width: 200,
    height: 200
  },
  body:{
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35 
  }
  
});

export default App;