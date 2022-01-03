import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import { useSelector } from 'react-redux';


const Notifications = () => {
  const {darkMode, emailId} = useSelector(state => state)

  return(
    <SafeAreaView style={styles.mainContainer}>
      <Header heading={'Notifications'}/>
      <View style={darkMode ? styles.containerDark : styles.containerLight}>
        <Text style={darkMode ? styles.salutationDark : styles.salutationLight}>Hello</Text>
        <Text style={darkMode ? styles.emailIdDark : styles.emailIdLight}>{emailId}</Text> 
        <Text style={darkMode ? styles.titleDark : styles.titleLight}>You don't have any notifications yet.</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  titleDark: {
    fontSize:20,
    fontWeight: '600',
    color: '#f7f7f7'
  },
  titleLight: {
    fontSize:20,
    // fontWeight: '600',
    color: '#575757'
  },
  containerDark: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030'
  },
  containerLight: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flexGrow: 1,
  },
  salutationDark: {
    fontSize:14,
    // fontWeight: '600',
    // marginBottom: 20,
    color: '#f7f7f7',
    fontStyle: 'italic',
  },
  salutationLight: {
    fontSize:24,
    // fontWeight: '600',
    // marginBottom: 20,
    color: '#575757',
    marginHorizontal: 10,
  },
  emailIdDark: {
    fontSize: 14,
    color: '#f7f7f7',
    fontStyle: 'italic',
  },
  emailIdLight: {
    fontSize: 20,
    color: '#575757',
    fontStyle: 'italic',
    marginBottom: 25,
  }
});
export default Notifications;