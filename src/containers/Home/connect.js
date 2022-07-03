import { useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BOOKS } from '../../models/Book';
import { useNavigation } from '../../utils';

const useConnect = () => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  const { navigate } = useNavigation();

  const recentBooks = BOOKS.slice(0, 3);

  const handlePress = useCallback(() => {
    navigate('Category');
  }, [navigate]);

  const handlePressIcon = useCallback(() => {
    console.log('Icon');
  }, []);

  return {
    safeBottom,
    recentBooks,
    handlePress,
    handlePressIcon,
  };
};

export default useConnect;
