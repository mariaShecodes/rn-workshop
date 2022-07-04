import { useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '../../utils';
import { BOOKS } from '../../models/Book';

const useConnect = () => {
  const { goBack } = useNavigation();

  const { bottom: safeBottom } = useSafeAreaInsets();

  const route = useRoute();

  const { id } = route.params;

  const book = BOOKS.find(elm => elm.id === id);

  const handlePressMenu = useCallback(() => {
    console.log('Menu');
  }, []);

  return { goBack, safeBottom, book, handlePressMenu };
};

export default useConnect;
