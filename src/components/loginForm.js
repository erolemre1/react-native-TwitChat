import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input, MyButton, Spinner } from './common';
import {emailChanged, passwordChanged, loginUser} from "../actions/";
import{connect} from "react-redux"; 
class LoginForm extends Component {


  onButtonClicked() {
    <Spinner/>
    const { email, password } = this.props;
    
    this.props.loginUser(email,password);
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    });
  }

  onEmailChanged(text) {
  this.props.emailChanged(text);

  }
   onPasswordChanged(text){
  this.props.passwordChanged(text);
}

  render() {
    const { error, loading } = this.props;

    const errorMsg = error ? (
      <Text style={styles.errorText}>
        {error}
      </Text>
    ) : null;

    return (
      <View style={{ padding: 30 }}>
        <View>
          <Input text='Email' inputPlaceHolder='Enter Email'
                 onChangeText={this.onEmailChanged.bind(this)}
                 value={this.props.email}/>
        </View>
        <View>
          <Input text='Password' inputPlaceHolder='Enter Password'
                 onChangeText={this.onPasswordChanged.bind(this)}
                 secureTextEntry
                 value={this.props.password}/>
        </View>
        {errorMsg}
        <MyButton spinner={loading}
                  title='Login'
                  onPress={this.onButtonClicked.bind(this)}
                  color='black' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
    height: 49,
    borderRadius: 10,
    justifyContent: 'center',
    fontSize: 18,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center'
  }
})
const mapStateToProps = state =>{
  const {email, password, loading,error} = state.auth;
  return{
    email , password, loading, error
  }
}
export default connect(mapStateToProps,
   {emailChanged, passwordChanged, loginUser}) (LoginForm);
