import { useContext } from 'react';
import { Dimensions, Platform } from 'react-native';
import { ThemeContext } from 'styled-components/native';

export const colors = {
  white: 'white',
  black: 'black',
  red: 'red',
  yellow: 'yellow',
  blue: 'blue',
  primary01: '#1e81b0',
  primary02: '#154c79',
  primary03: '#76b5c5',
  secondary01: '#fafaf0',
  transparent: 'rgba(0,0,0,0)',
};

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

const theme = {
  colors,
  device,
};

export default theme;

export const useTheme = () => useContext(ThemeContext);
