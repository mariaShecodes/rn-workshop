import React from 'react';
import { Header } from '../../components';
import { Container, Body, Top, Image, Title, Subtitle, Text } from './styles';
import useConnect from './connect';

const Details = () => {
  const { goBack, safeBottom, book, handlePressMenu } = useConnect();

  return (
    <Container>
      <Header
        onPressLeft={goBack}
        leftIcon="chevron"
        title="Detalles"
        onPressRight={handlePressMenu}
        rightIcon="menu"
      />
      <Body safeBottom={safeBottom}>
        <Top>
          <Image source={{ uri: book.image }} resizeMode="contain" />
          <Title title={book.title} />
        </Top>

        <Subtitle title="Autor" />
        <Text title={book.author} />
        <Subtitle title="Sinopsis" />
        <Text title={book.synopsis} />
        <Subtitle title="Año" />
        <Text title={book.year} />
        <Subtitle title="Páginas" />
        <Text title={book.pages} />
        <Subtitle title="Estado" />
        <Text title={book.status} />
      </Body>
    </Container>
  );
};

export default Details;
