import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './common/Header';
import LoginForm from './LoginForm';
import Spinner from './common/Spinner';
import Button from './common/Button';
import CardSection from './common/CardSection'

class App extends Component {
  state = {
    loggedIn: null,
  };

  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfJlNxBNnYk-9__j0rTCNTgpyFO6dElOk",
      authDomain: "native-auth-6d40b.firebaseapp.com",
      databaseURL: "https://native-auth-6d40b.firebaseio.com",
      projectId: "native-auth-6d40b",
      storageBucket: "native-auth-6d40b.appspot.com",
      messagingSenderId: "20872413019",
      appId: "1:20872413019:web:7a20865d9eb2df08ace47e",
      measurementId: "G-X5FCZS0HJC",
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => {
                console.log('PRESS');
              }}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
