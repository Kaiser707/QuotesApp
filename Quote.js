import React, {Component} from 'react'
import{
	View,
	Text,
	StyleSheet,
	Platform
}from 'react-native'

class Quote extends Component{
	render() {
		return(
			<View style={styles.quoteContainer}>
				<Text style={styles.quoteText}>{this.props.quoteText}</Text>
				<Text style={styles.sourceText}>{this.props.quoteSource}</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({

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
})

export default Quote