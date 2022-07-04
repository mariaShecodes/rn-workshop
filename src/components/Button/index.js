import React, { memo, useCallback } from 'react';
import { Container } from './styles';
import Text from '../Text';

const Button = ({ id, title, onPress, style }) => {
  const handlePress = useCallback(() => {
    if (onPress && id && title) {
      onPress(id, title);
    }
  }, [id, title, onPress]);

  return (
    <Container onPress={handlePress} style={style}>
      <Text title={title} variant="button" />
    </Container>
  );
};

export default memo(Button);
