import React from 'react';
import { Header } from '../../components';

import {
  Container,
  Body,
  Top,
  Image,
  Title,
  Subtitle,
  Text,
  Horizontal,
  Section,
} from './styles';
import useConnect from './connect';

const Details = () => {
  const { goBack, safeBottom, book, handlePressMenu } = useConnect();

  return (
    <Container>
      <Header
        onPressLeft={goBack}
        leftIcon="chevron"
        onPressRight={handlePressMenu}
        rightIcon="menu"
      />

      <Image source={{ uri: book.image }} resizeMode="contain" />

      <Top />
      <Body safeBottom={safeBottom}>
        <Title>{book.title}</Title>
        <Subtitle>Autor</Subtitle>
        <Text>{book.author}</Text>
        <Subtitle>Sinopsis</Subtitle>
        <Text>{book.synopsis}</Text>
        <Horizontal>
          <Section>
            <Subtitle>Año</Subtitle>
            <Text>{book.year}</Text>
          </Section>
          <Section hasMargin>
            <Subtitle>Páginas</Subtitle>
            <Text>{book.pages}</Text>
          </Section>
        </Horizontal>
        <Subtitle>Estado</Subtitle>
        <Text>{book.status}</Text>
      </Body>
    </Container>
  );
};

export default Details;
