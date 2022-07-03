import React, { memo } from 'react';
import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Section,
  Synopsis,
} from './styles';
import Text from '../Text';

const Card = ({ uri, title, author, synopsis, style }) => (
  <Container style={style}>
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

export default memo(Card);
