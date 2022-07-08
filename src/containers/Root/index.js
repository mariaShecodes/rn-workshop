import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import Navigator from '../../navigator';
import theme from '../../theme';

const Root = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigator />
    </ThemeProvider>
  </NavigationContainer>
);

export default Root;
