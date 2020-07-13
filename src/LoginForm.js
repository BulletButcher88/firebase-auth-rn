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
    loading: false,
  };
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((err) => {
            this.setState({ error: "Authentication Failed: " + err.message, loading: false });
          });
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
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
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}



export default LoginForm;
