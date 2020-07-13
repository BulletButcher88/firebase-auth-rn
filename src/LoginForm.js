import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from './common/Spinner'


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((err) => {
            this.setState({ error: "Authentication Failed: " + err.message });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email: email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureText
            label="Password"
            placeholder="********"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password: password })}
          />
        </CardSection>
        <Text style={{ color: 'red', fontSize: 18 }}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}



export default LoginForm;
