import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Auth" />
      </View>
    );
  }
}

export default App;
