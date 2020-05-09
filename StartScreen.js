import React, {Component} from 'react'
import{
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Button
}from 'react-native'
import {NavigationActions} from 'react-navigation'

const zenImage = require('./assets/stones.jpg');

//const { quotes } = require('./quotes.json') 

class StartScreen extends Component{

  // constructor(props){
  //   super(props)   

  //   this.state = {
  //     quoteIndex: 3,
  //   }

  //   this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
  // }

    
  //   _incrementQuoteIndex(){
  //     let newIndex

  //     if(this.state.quoteIndex + 1 === quotes.length){
  //       newIndex = 0
  //     } else{
  //       newIndex = this.state.quoteIndex + 1
  //     }
  //     this.setState({
  //       quoteIndex: newIndex
  //     })
  //   }


  static navigationOptions = {
    headerShown: false
  };
  render() {
    //const tempQuote = quotes[this.state.quoteIndex]
    //console.log(this._incrementQuoteIndex)
    return(

      <View style={styles.body}> 
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('QuoteScreen')}>
              <Image source={zenImage} style={styles.buttonImage}/>        
              <Text style={styles.relaxText}>I am ready to relax</Text>       
            </TouchableOpacity>     
          </View>
      )
  }
}


const styles = StyleSheet.create({
  
  relaxText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
    marginTop: 20,
    textAlign: 'center'
  },
  buttonText: {
    color: '#ffffff'
  },
  buttonImage: {
    width: 200,
    height: 200
  },
  body:{
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad'
  },
  button:{
    backgroundColor: '#889dad',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35 
  }
  
});

export default StartScreen