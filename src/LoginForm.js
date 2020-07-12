import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';


class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput placeholder="email" style={{ height: 40, width: 100 }} />
        </CardSection>
        <CardSection>
          <TextInput placeholder="password" style={{ height: 40, width: 100 }} />
        </CardSection>
        <CardSection>
          <Button> Log In</Button>
        </CardSection>
      </Card>
    );
  }
}



export default LoginForm;
