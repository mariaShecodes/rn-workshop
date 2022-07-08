import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Navigator from '../../navigator';

const Root = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator />
  </NavigationContainer>
);

export default Root;
