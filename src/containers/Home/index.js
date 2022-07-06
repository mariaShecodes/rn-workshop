import React from 'react';
import { Header } from '../../components';
import { Container, Categories, Button, Body, Text, Card } from './styles';
import { CATEGORIES } from './constants';
import useConnect from './connect';

const Home = () => {
  const {
    safeBottom,
    recentBooks,
    handlePressCategory,
    handlePressIcon,
    handlePressCard,
  } = useConnect();

  return (
    <Container>
      <Header onPressLeft={handlePressIcon} leftIcon="user" />
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
