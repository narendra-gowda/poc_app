import React from 'react';
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native'
import { useSelector } from 'react-redux';

const PopUp = (
  {
    setPopUpDisplay, 
    visible, 
    push,
    contact,
    tag,
    attributes,
    token
  }) => {
    
  const {darkMode} = useSelector(state => state)

  return(
    <Modal
      animationType='fade'
      visible={visible}
      transparent={true}
      presentationStyle='overFullScreen'
    >
      <View style={styles.overlay}>
        <View style={darkMode ? styles.containerDark : styles.containerLight}>
          <Text style={darkMode ? styles.titleDark : styles.titleLight}>Registration Details</Text>
          <ScrollView style={{marginVertical: 10}}>
            <View style={styles.subTextContainters}>
              <Text style={darkMode ? styles.subTitleDark : styles.subTitleLight}>Contact Key: </Text>
              <Text style={darkMode ? styles.textDark : styles.textLight}>{contact}</Text>
            </View>
            <View style={styles.subTextContainters}>
              <Text style={darkMode ? styles.subTitleDark : styles.subTitleLight}>Push Enabled: </Text>
              <Text style={darkMode ? styles.textDark : styles.textLight}>{push ? 'True' : 'False'}</Text>
            </View>
            <View style={styles.subTextContainters}>
              <Text style={darkMode ? styles.subTitleDark : styles.subTitleLight}>Tags: </Text>
              <Text style={darkMode ? styles.textDark : styles.textLight}>{tag}</Text>
            </View>
            <View style={styles.subTextContainters}>
              <Text style={darkMode ? styles.subTitleDark : styles.subTitleLight}>Attributes: </Text>
              <Text style={darkMode ? styles.textDark : styles.textLight}>{attributes}</Text>
            </View>
            <View style={styles.subTextContainters}>
              <Text style={darkMode ? styles.subTitleDark : styles.subTitleLight}>System Token: </Text>
              <Text style={darkMode ? styles.textDark : styles.textLight}>{token}</Text>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.okButton}
              onPress={setPopUpDisplay}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>          
        </View>
      </View>
    </Modal>
  )
}

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  containerLight: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.50,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
  },
  containerDark: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.50,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#303030',
  },
  titleLight: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color:'#575757',
  },
  titleDark: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#f7f7f7'
  },
  okButton: {
    backgroundColor: '#f06c00',
    padding: 5,
    width: '20%',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',    
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  textContainer: {
    marginVertical: 15
  },
  textLight: {
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 1,
    color:'#575757',
  },
  textDark: {
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 1,
    color: '#f7f7f7'
  },
  subTextContainters: {
    flexDirection: 'row', 
    marginTop: 10,
  },
  subTitleDark: {
    fontSize: 16,
    color: '#f7f7f7'
  },
  subTitleLight: {
    fontSize: 16,
    color:'#575757',
  }
})
export default PopUp;