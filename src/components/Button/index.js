import React, { memo, useCallback } from 'react';
import { Container, Text } from './styles';

const Button = ({ id, title, onPress, style }) => {
  const handlePress = useCallback(() => {
    if (onPress && id && title) {
      onPress(id, title);
    }
  }, [id, title, onPress]);

  return (
    <Container onPress={handlePress} style={style}>
      <Text variant="button">{title}</Text>
    </Container>
  );
};

export default memo(Button);
