import { useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BOOKS } from '../../models/Book';
import { useNavigation } from '../../utils';

const useConnect = () => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  const { navigate } = useNavigation();

  const recentBooks = BOOKS.slice(0, 3);

  const handlePressCategory = useCallback(
    (id, title) => {
      navigate('Category', { categoryId: id, categoryName: title });
    },
    [navigate],
  );

  const handlePressIcon = useCallback(() => {
    console.log('Icon');
  }, []);

  const handlePressCard = useCallback(
    id => {
      navigate('Details', { id });
    },
    [navigate],
  );

  return {
    safeBottom,
    recentBooks,
    handlePressCategory,
    handlePressIcon,
    handlePressCard,
  };
};

export default useConnect;
