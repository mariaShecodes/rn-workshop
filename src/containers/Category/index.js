import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '../../utils';

const Category = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Category</Text>
      <Button title="Atrás" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Category;
