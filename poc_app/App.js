import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import {Provider} from 'react-redux';
import Routes from './src/components/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import {createStore} from 'redux';
import loginReducer from './src/state/reducers/login';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, loginReducer);

const store = createStore(persistedReducer)
const persistor = persistStore(store)

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
 
  return ( 
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routes />
      </PersistGate>
    </Provider>   
  )     
};

export default App;