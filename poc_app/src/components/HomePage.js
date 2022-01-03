import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';


const HomePage = ({setCanGoBack, webView}) => {
  const [loader, setLoader] = useState(false);
  return(
    <>
    <WebView
      source={{ uri: 'https://www.sainsburys.co.uk' }}
      style={{flex: 1 }}
      ref={webView}
      onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
      onLoadStart={() => setLoader(true)}
      onLoadEnd={() => setLoader(false)} />
      {
        loader && 
        <ActivityIndicator 
          color={'orange'} 
          size={'large'} 
          style={styles.spinner}
        />
      }
      </>
  )
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
 const styles = StyleSheet.create({
   spinner: {
      position: 'absolute',
      top: height / 2.1,
      left: width /2.2,
   }
 })
export default HomePage;