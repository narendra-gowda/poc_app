import React,{useState, useEffect} from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
  Alert
} from 'react-native';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import MCReactModule from 'react-native-marketingcloudsdk';
import {pushStatus} from '../state/actions/login';
import PopUp from '../components/PopUp';


const Settings = () => {
  const dispatch = useDispatch();
  const {darkMode, pushData} = useSelector(state => state)
  
  const [pushEnabled, setPushEnabled] = useState(pushData)
  const [verboseEnabled, setVerboseEnabled] = useState(false)
  const [systemToken, setSystemToken] = useState('')
  const [popUpDisplay, setPopUpDisplay] = useState(false);
  const [tag, setTag] = useState('');
  const [tagEdit, setTagEdit] = useState('');
  const [attribute, setAttribute] = useState('');
  const [attriKey, setAttriKey] = useState('');
  const [attriValue, setAttriValue] = useState('');
  const [contactKey, setContactKey] = useState('');

  useEffect(() => {
    async function fetchFromSDK () {
      let pushData = await MCReactModule.isPushEnabled();
      let token = await MCReactModule.getSystemToken();
      let tags = await MCReactModule.getTags();
      let attributes = await MCReactModule.getAttributes();
      let contact = await MCReactModule.getContactKey();
      setPushEnabled(pushData);
      setSystemToken(token);
      setTag(tags);
      setAttribute(attributes);
      setContactKey(contact);
    }
    fetchFromSDK();
  },[pushEnabled, tagEdit, attriKey])
  
  const pushSwitchHandler = (value) => {
    setPushEnabled(prevState => !prevState)
    if(value){
      MCReactModule.enablePush();
      dispatch(pushStatus(value));
    } else {
      MCReactModule.disablePush();
      dispatch(pushStatus(value));
    }
  }

  const verboseSwitchHandler = (value) => {
    setVerboseEnabled(prevState => !prevState)
    if(value){
      MCReactModule.enableVerboseLogging();
    } else {
      MCReactModule.disableVerboseLogging();
    }
  }

  const setTagHandler = () => {
    if(tagEdit === ''){
      Alert.alert('Please enter value to proceed')
    } else {
      MCReactModule.addTag(tagEdit)
      setTagEdit('')
    }
  }

  const resetTagHandler = () => {
    if(tagEdit === ''){
      Alert.alert('Please enter value to proceed')
    } else {
      MCReactModule.removeTag(tagEdit)
      setTagEdit('')
    }
  }

  const setAttributeHandler = () => {
    if(attriValue === ''){
      Alert.alert('Please enter value to proceed')
    } else {
      MCReactModule.setAttribute(attriKey, attriValue)
      setAttriKey('')
      setAttriValue('')
    }    
  }

  const resetAttributeHandler = () => {
    if(attriKey === ''){
      Alert.alert('Please enter value to proceed')
    } else {
      MCReactModule.clearAttribute(attriKey)
      setAttriKey('')
      setAttriValue('')
    }
  }

  const logStateHandler = () => {
    MCReactModule.logSdkState()
  }

  return(   
    <SafeAreaView>
      <Header heading={"Settings"} powerBtn={false}/>
        <PopUp 
          setPopUpDisplay={() => setPopUpDisplay(false)}
          visible={popUpDisplay}   
          contact={contactKey}
          tag={JSON.stringify(tag)}
          attributes={JSON.stringify(attribute)}
          push={pushEnabled}
          token={systemToken}
        />
      <ScrollView>      
        <View style={darkMode ? styles.containerDark : styles.containerLight}>

          <View style={styles.switchContainer}>
            <Text style={darkMode ? styles.textDark : styles.textLight}>Enable Push Notification</Text>
            <Switch
              value={pushEnabled}
              trackColor={{true: '#f06c00', false: 'grey'}}
              thumbColor={pushEnabled ? '#ebebeb' : '#ebebeb'}
              onValueChange={pushSwitchHandler}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={darkMode ? styles.textDark : styles.textLight}>Enable Verbose Logging</Text>
            <Switch
              value={verboseEnabled}
              trackColor={{true: '#f06c00', false: 'grey'}}
              thumbColor={verboseEnabled ? '#ebebeb' : '#ebebeb'}
              onValueChange={verboseSwitchHandler}
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={darkMode ? styles.textDark : styles.textLight}>Attributes</Text>
            <TextInput
              autoComplete="off"
              autoCorrect={false}
              placeholder="Add Attributes (Key)" 
              placeholderTextColor="#a1a1a1"
              style={darkMode ? styles.textInputDark : styles.textInputLight}
              onChangeText={text => setAttriKey(text)}
              value={attriKey}
            />
            <TextInput
              autoComplete="off"
              autoCorrect={false}
              placeholder="Add Attributes (Value)" 
              placeholderTextColor="#a1a1a1"
              style={darkMode ? styles.textInputDark : styles.textInputLight}
              onChangeText={text => setAttriValue(text)}
              value={attriValue}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={setAttributeHandler}
              >
                <Text style={styles.btnText}>  Set  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={resetAttributeHandler}
              >
                <Text style={styles.btnText}>Reset</Text>
              </TouchableOpacity>
            </View>      
          </View>
  
          <View style={styles.subContainer}>
            <Text style={darkMode ? styles.textDark : styles.textLight}>Tags</Text>
            <TextInput
              autoComplete="off"
              autoCorrect={false}
              placeholder="Add Tags" 
              placeholderTextColor="#a1a1a1"
              style={darkMode ? styles.textInputDark : styles.textInputLight}
              onChangeText={text => setTagEdit(text)}
              value={tagEdit}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={setTagHandler}
              >
                <Text style={styles.btnText}>  Set  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={resetTagHandler}
              >
                <Text style={styles.btnText}>Reset</Text>
              </TouchableOpacity>
            </View>      
          </View>
  
          <View style={styles.subContainer}>
            <Text style={darkMode ? styles.textDark : styles.textLight}>Registration Details</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => setPopUpDisplay(true)}
            >
              <Text style={styles.btnText}>View</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.subContainer}>
            <Text style={darkMode ? styles.textDark : styles.textLight}>Log SDK state in Android Studio</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={logStateHandler}
            >
              <Text style={styles.btnText}>Log</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  textDark: {
    fontSize:20,
    color: '#f7f7f7'
  },
  textLight: {
    fontSize: 20,
    color:'#575757',
  },
  containerDark: {
    paddingHorizontal: '6%',
    backgroundColor: '#303030',
    paddingBottom: '19%',
    paddingTop: '4%',
  },
  containerLight: {
    paddingHorizontal: '6%',
    paddingBottom: '19%',
    paddingTop: '4%',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  textInputLight: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '100%',
    fontSize: 18,
    paddingHorizontal: 10,
    marginVertical: 10,
    color:'#575757',
  },
  textInputDark: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '100%',
    fontSize: 18,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#f7f7f7',
  },
  buttons: {
    backgroundColor: '#f06c00',
    // backgroundColor: '#149ea8',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    paddingHorizontal: '17%',
  },
  subContainer: {
    marginVertical: 25
  }
});
export default Settings;