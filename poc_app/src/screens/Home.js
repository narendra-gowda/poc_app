import React,{useState, useRef} from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import HomePage from '../components/HomePage';

const Home = () => {
  const {emailId, showLogin, darkMode} = useSelector(state => state)
  const [canGoBack, setCanGoBack] = useState(false);
  const webView = useRef(null)
  

  return(   
    <SafeAreaView style={styles.mainContainer}>
      <Header heading={"MMH Pilot App"} powerBtn={true} backBtn={canGoBack} webView={webView}/>
      <HomePage setCanGoBack={setCanGoBack} webView={webView}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({  
  mainContainer: {
    flexGrow: 1,
  },
});
export default Home;