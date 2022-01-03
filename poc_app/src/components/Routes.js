import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import FooterMenuBar from '../components/FooterMenuBar';
import Login from '../screens/Login';
import {useSelector, useDispatch} from 'react-redux';
import { useColorScheme } from 'react-native';
import {isDarkMode} from '../state/actions/login';


const Routes = () => {
  const dispatch = useDispatch();
  dispatch(isDarkMode(useColorScheme() === 'dark' ? true : false));
  const showLogin = useSelector(state => state.showLogin);
  return(
    showLogin ? <Login /> : 
    (
      <NavigationContainer>
        <FooterMenuBar/>
      </NavigationContainer>
    )
  )
}
export default Routes;