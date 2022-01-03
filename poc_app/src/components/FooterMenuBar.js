import React from 'react';
import {faHome, faBell, faQuestion, faCog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import About from '../screens/About';
import Settings from '../screens/Settings';

const FooterMenuBar = () => {

  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#04020f'},
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{tabBarIcon: ({focused})=> {
          return (<FontAwesomeIcon icon={faHome} size={25} color={focused?'white':'grey'}/>)
        }}}
      />
      <Tab.Screen name="Notifications" component={Notifications} 
        options={{tabBarIcon: ({focused})=> {
          return (<FontAwesomeIcon icon={faBell} size={25} color={focused?'white':'grey'}/>)
        }}}
      />
      <Tab.Screen name="About" component={About} 
         options={{tabBarIcon: ({focused})=> {
          return (<FontAwesomeIcon icon={faQuestion} size={25} color={focused?'white':'grey'}/>)
        }}}
      />
      <Tab.Screen name="Settings" component={Settings} 
         options={{tabBarIcon: ({focused})=> {
          return (<FontAwesomeIcon icon={faCog} size={25} color={focused?'white':'grey'}/>)
        }}}
      />
    </Tab.Navigator>
  )
};
export default FooterMenuBar;