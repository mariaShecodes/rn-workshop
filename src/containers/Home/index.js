import React from 'react';
import { Header } from '../../components';
import { Container, Categories, Button, Body, Text, Card } from './styles';
import { CATEGORIES } from './constants';
import useConnect from './connect';

const Home = () => {
  const { safeBottom, recentBooks, handlePressCategory, handlePressIcon } =
    useConnect();

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
        <Text title="Recientes" variant="title1" />
        {recentBooks.map((book, index) => (
          <Card
            key={index}
            uri={book.image}
            title={book.title}
            author={book.author}
            synopsis={book.synopsis}
          />
        ))}
      </Body>
    </Container>
  );
};

export default Home;
