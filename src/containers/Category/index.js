import React, { useCallback } from 'react';
import { Header, Card, Text } from '../../components';
import { Container, List, Separator, EmptyContainer } from './styles';
import useConnect from './connect';

const Category = () => {
  const { goBack, categoryName, booksByCategory, handlePressItem } =
    useConnect();

  const handleRenderItem = useCallback(
    ({ item }) => (
      <Card
        id={item.id}
        uri={item.image}
        title={item.title}
        author={item.author}
        synopsis={item.synopsis}
        onPress={handlePressItem}
      />
    ),
    [handlePressItem],
  );

  const extractItemKey = useCallback(item => item.id, []);

  const handleRenderEmptyItem = useCallback(() => {
    return (
      <EmptyContainer>
        <Text title="Empty list" />
      </EmptyContainer>
    );
  }, []);

  return (
    <Container>
      <Header onPressLeft={goBack} leftIcon="chevron" title={categoryName} />
      <List
        data={booksByCategory}
        renderItem={handleRenderItem}
        keyExtractor={extractItemKey}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={handleRenderEmptyItem}
      />
    </Container>
  );
};

export default Category;
