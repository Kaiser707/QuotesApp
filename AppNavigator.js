import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'
import Test from './Test'

 

 const AppNavigator = createStackNavigator(
 {
   Home: StartScreen,
   QuoteScreen: QuoteScreen
 }
 
);

const Navigation = createAppContainer(AppNavigator)


export default Navigation