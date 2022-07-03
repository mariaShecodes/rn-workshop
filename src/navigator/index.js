import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details, Category } from '../containers';

const { Navigator, Screen } = createNativeStackNavigator();

export const generalStackScreenOptions = {
  headerShown: false,
};

const AppNavigator = () => (
  <Navigator screenOptions={generalStackScreenOptions}>
    <Screen name="Home" component={Home} />
    <Screen name="Category" component={Category} />
    <Screen name="Details" component={Details} />
  </Navigator>
);

export default AppNavigator;
