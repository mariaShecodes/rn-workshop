import React, { memo, useCallback } from 'react';
import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Section,
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
        <Text title={title} variant="title2" />
        <Text title={author} variant="subtitle" />
        <Section title="Sinopsis" variant="subtitle" />
        <Synopsis title={synopsis} variant="subtitle" />
      </InfoContainer>
    </Container>
  );
};

export default memo(Card);
