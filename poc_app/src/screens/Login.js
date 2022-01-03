import React, {useState} from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginPressed } from '../state/actions/login';
import MCReactModule from 'react-native-marketingcloudsdk';


const Login = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const {emailId, darkMode} = useSelector(state => state)
  const prefix = 'JS_TST_SE_'

  // console.log({showLogin});
  // console.log({emailId});


  const loginBtnHandler = () => {
    validateEmail(email)
  }

  const validateEmail = (mail) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.match(validRegex)){
       dispatch(loginPressed(email))
       //To register contact key in SF Marketing Cloud
       MCReactModule.setContactKey(prefix+email)
    }else{
      Alert.alert('Please enter valid Email address')
    }
  }

  return(
    <View style={darkMode ? styles.containerDark : styles.containerLight}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={darkMode ? styles.titleDark : styles.titleLight}>Log in</Text>
      <Text style={darkMode ? styles.textDark : styles.textLight}>Please login to continue</Text>
      <TextInput
        keyboardType="email-address"
        autoComplete="off"
        autoCorrect={false}
        placeholder="Enter your email ID" 
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
        placeholderTextColor={'lightgrey'}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={loginBtnHandler}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleDark: {
    fontSize:30,
    fontWeight: '600',
    marginVertical: 20,
    color: '#f7f7f7',    
  },
  titleLight: {
    fontSize:30,
    fontWeight: '600',
    marginVertical: 20,
    color:'#575757',    
  },
  containerDark: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
  },
  containerLight: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  loginBtn: {
    backgroundColor: '#ff7b00',
    paddingVertical: 15,
    borderRadius: 5,
    width: '80%', 
    marginTop: 40  
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700'
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  textDark: {
    color: '#f7f7f7',    
  },
  textLight: {
    color:'#575757',    
  }
});

export default Login;