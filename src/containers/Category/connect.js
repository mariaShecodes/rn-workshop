import { useNavigation } from '../../utils';
import { useRoute } from '@react-navigation/native';
import { BOOKS } from '../../models/Book';
import { useCallback } from 'react';

const useConnect = () => {
  const { goBack, navigate } = useNavigation();
  const route = useRoute();

  const { categoryId, categoryName } = route.params;

  const booksByCategory = BOOKS.filter(elm => elm.status === categoryId);

  const handlePressItem = useCallback(
    id => {
      navigate('Details', { id });
    },
    [navigate],
  );

  return {
    goBack,
    categoryName,
    booksByCategory,
    handlePressItem,
  };
};

export default useConnect;
