
import React, { Component } from 'react';
import {View, Text} from "react-native";
import { Provider } from 'react-redux';
import firebase from "firebase";
import {createStore, applyMiddleware} from  "redux";
import reducers from "./reducers";
import LoginForm from "./components/loginForm";
import ReduxThunk from "redux-thunk";


export default class App extends Component{
  componentDidMount () {
    const firebaseConfig = {
      apiKey: "AIzaSyCYhgRcsfm6kGpSJHKW8xBPZURLrUDonbs",
      authDomain: "twitchat-d631b.firebaseapp.com",
      projectId: "twitchat-d631b",
      storageBucket: "twitchat-d631b.appspot.com",
      messagingSenderId: "275524534096",
      appId: "1:275524534096:web:23ea16f248e00f9752b655",
      measurementId: "G-N2F3E4WJL8"
    };
    firebase.initializeApp(firebaseConfig);
    
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(

<Provider store={store}>
      <View style ={{flex:1, alignItems:"center",justifyContent:"center", backgroundColor:"gray"}}>
        <LoginForm/> 
      </View>
      </Provider>
    )
  }
}