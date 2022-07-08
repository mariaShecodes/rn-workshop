import React from 'react';
import { Text } from '../../components';
import {
  Container,
  LogoContainer,
  Logo,
  Categories,
  Button,
  Body,
  Card,
} from './styles';
import { CATEGORIES } from './constants';
import useConnect from './connect';

const Home = () => {
  const {
    safeBottom,
    safeTop,
    recentBooks,
    handlePressCategory,
    handlePressCard,
  } = useConnect();

  return (
    <Container safeTop={safeTop}>
      <LogoContainer>
        <Logo source={require('../../assets/icons/logo.png')} />
        <Text variant="logo">LeeLibros</Text>
      </LogoContainer>
      <Categories>
        {CATEGORIES.map(elm => (
          <Button
            key={elm.id}
            id={elm.id}
            title={elm.title}
            onPress={handlePressCategory}
          />
        ))}
      </Categories>
      <Body safeBottom={safeBottom}>
        <Text variant="title1">Recientes</Text>
        {recentBooks.map(book => (
          <Card
            key={book.id}
            id={book.id}
            uri={book.image}
            title={book.title}
            author={book.author}
            synopsis={book.synopsis}
            onPress={handlePressCard}
          />
        ))}
      </Body>
    </Container>
  );
};

export default Home;
