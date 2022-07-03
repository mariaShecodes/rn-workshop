import React, { memo } from 'react';
import { Container } from './styles';
import Text from '../Text';

const Button = ({ title, onPress, style }) => (
  <Container onPress={onPress} style={style}>
    <Text title={title} variant="button" />
  </Container>
);

export default memo(Button);
