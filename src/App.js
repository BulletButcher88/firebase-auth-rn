import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './common/Header';
import LoginForm from './LoginForm'


class App extends Component {


  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfJlNxBNnYk-9__j0rTCNTgpyFO6dElOk",
      authDomain: "native-auth-6d40b.firebaseapp.com",
      databaseURL: "https://native-auth-6d40b.firebaseio.com",
      projectId: "native-auth-6d40b",
      storageBucket: "native-auth-6d40b.appspot.com",
      messagingSenderId: "20872413019",
      appId: "1:20872413019:web:7a20865d9eb2df08ace47e",
      measurementId: "G-X5FCZS0HJC"
    });

  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
