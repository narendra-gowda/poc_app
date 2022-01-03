import React from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  SafeAreaView,
  useColorScheme
} from 'react-native';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const About = () => {
  const {darkMode} = useSelector(state => state)

  return(   
    <SafeAreaView style={styles.mainContainer}>
      <Header heading={"About"} powerBtn={false}/>
      <View style={darkMode ? styles.containerDark : styles.containerLight}>
        <Text style={darkMode ? styles.titleDark : styles.titleLight}>
          This is a Proof Of Concept Application built using React-Native library 
          to test Sainsbury's MMH experiments.
          This App is integrated with SalesForce's MobilePush SDK to test
          Push Notifications from SalesForce.
          Hence this App's sole purpose is to register the device along with the 
          user details in the SaleForce Marketing Cloud and receive various types of 
          marketing notifications to encourage customers to interact more with the App
          and are made aware of latest offers on Sainsbury's products.
        </Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  titleDark: {
    fontSize:18,
    textAlign: 'justify',
    color: '#f7f7f7'
  },
  titleLight: {
    fontSize:18,
    textAlign: 'justify',
    color: '#575757'
  },
  containerDark: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    backgroundColor: '#303030',
  },
  containerLight: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  mainContainer: {
    flexGrow: 1,
  }
});
export default About;