
///import { createStackNavigator, createAppContainer} from 'react-navigation'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen'
const navigator = createStackNavigator (
  
  {
 Search: SearchScreen,
 ResultsShow: ResultsShowScreen
},


{
  initialRouterName:'Search',
  
  defaultNavigationOptions:{
    title:'Business Search'
  }

});


export default createAppContainer(navigator);

/*
Client ID
nXS3g6n-HdXE_ae925QaHA

API Key
2lZXKbENLHYZWMUKCCDxYxlp-dd34Hnb7NfJzBkUrq7EuiNJwKJUVpMHVaOjCokA0nF2fIepuRMAgu51IgV7qb5ugI2-eDHCDNjffdRFf8jxZHGqH47fwv_OnXUGYHYx
*/
