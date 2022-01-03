import React from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import {useDispatch} from 'react-redux';
import { logoutPressed } from '../state/actions/login';
import {faPowerOff, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Header = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    Alert.alert(
      'Are you sure you want to logout?',
      '',
      [
        {
          text: 'Yes',
          onPress: () => dispatch(logoutPressed()),
        },
        {text: 'No'}
      ]);
  }

  const onBackHandler = () => {
    if(props.webView.current){
      props.webView.current.goBack();
    }
  }

  return(
    <View style={styles.container}>
      {props.backBtn && <TouchableOpacity
        style={styles.chevron}
        // disabled={!props.backBtn}
        onPress={onBackHandler}
      >
        <FontAwesomeIcon icon={faChevronLeft} color='white' size={25} /> 
      </TouchableOpacity>}
      <Text style={styles.title}>{props.heading}</Text>
      {props.powerBtn && <TouchableOpacity
        style={styles.powerBtn}
        onPress={logoutHandler}
      >
        <FontAwesomeIcon icon={faPowerOff} color='white' size={25} />  
      </TouchableOpacity>}
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize:24,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'sans-serif-medium'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8c00',
    height: 55,
    flexDirection: 'row',
    display: 'flex',
    position: 'relative'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '80%',
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 20
  },
  powerBtn: {
    position: 'absolute',
    right: 15,
  },
  chevron: {
    position: 'absolute',
    left: 10,
  }
});
export default Header;