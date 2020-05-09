import React, {Component} from 'react'
import{
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	LayoutAnimation,
	UIManager
}from 'react-native'

import Quote from './Quote'
import NextQuoteButton from './NextQuoteButton'



const { quotes } = require('./quotes.json')


class QuoteScreen extends Component{


	static navigationOptions = {
    headerShown: false
  };
	


	constructor(props){
		super(props);

		this.state = {
			quoteIndex: 3,
		};

		this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);

		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}


	_incrementQuoteIndex(){
      let newIndex

      if(this.state.quoteIndex + 1 === quotes.length){
        newIndex = 0
      } else{
        newIndex = this.state.quoteIndex + 1
      }
      this.setState({
        quoteIndex: newIndex
      })
    }


	render() {
		
		const displayQuote = quotes[this.state.quoteIndex]
		const bgImage = require('./assets/aesbg.jpg')
		

		{/*const quoteText = this.props.quoteText.                     // commented code for initialising variables to props
		const quoteSource = this.props.quoteSource */}
		return(
			<ImageBackground source={bgImage} style={{width: '100%', height: '100%'}}>
				<View style={styles.body}>   
	            	{/*<Quote quoteText={incomingQuote.text} quoteSource={incomingQuote.source} />  */}
	            	<View style={styles.quoteContainer}>
						<Text style={styles.quoteText} qid={this.state.quoteIndex}>{displayQuote.text}</Text>
						<Text style={styles.sourceText} qid={this.state.quoteIndex}>{displayQuote.source}</Text>
					</View>
	            	<NextQuoteButton onPress={this._incrementQuoteIndex}/>           
	          	</View>
	        </ImageBackground>
			)
	}
}

const styles = StyleSheet.create({
  
  relaxText: {
    fontSize: 20,
    fontStyle: 'italic'
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
  },
  quoteContainer:{
		flex: 1,
		justifyContent: 'center'
	},

	quoteText:{
		fontFamily: 'normal',
		fontSize: 36,
		color: '#ffffff',
		marginVertical: 38,
		textAlign: 'center'
	},
	sourceText:{
		fontFamily: 'AvenirNext-Italic',
		fontSize: 20,
		color: '#F8F8F8',
		textAlign: 'right',
		fontStyle: 'italic'
	}
  
});

export default QuoteScreen