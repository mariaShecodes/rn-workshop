import React, { memo, useCallback } from 'react';
import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Synopsis,
} from './styles';
import Text from '../Text';

const Card = ({ id, uri, title, author, synopsis, onPress, style }) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [id, onPress]);

  return (
    <Container style={style} onPress={handlePress}>
      <ImageContainer>
        <Image source={{ uri }} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Text variant="subtitle">{author}</Text>
        <Synopsis variant="subtitle">{synopsis}</Synopsis>
      </InfoContainer>
    </Container>
  );
};

export default memo(Card);
