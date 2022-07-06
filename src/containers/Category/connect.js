import { useCallback, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '../../utils';
import { BOOKS } from '../../models/Book';

const useConnect = () => {
  const { goBack, navigate } = useNavigation();
  const route = useRoute();

  const { categoryId, categoryName } = route.params;

  const booksByCategory = useMemo(() => {
    if (categoryId === 'all') {
      return BOOKS;
    }
    return BOOKS.filter(elm => elm.status === categoryId);
  }, [categoryId]);

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
