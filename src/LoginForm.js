import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

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
        <CardSection>
          <Button> Log In</Button>
        </CardSection>
      </Card>
    );
  }
}



export default LoginForm;
