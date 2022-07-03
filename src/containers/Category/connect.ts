import { useNavigation } from '../../utils';
import { useRoute } from '@react-navigation/native';
import { BOOKS } from '../../models/Book';

const useConnect = () => {
    const { goBack } = useNavigation();
    const route = useRoute();

    const { categoryId, categoryName } = route.params;

    console.log('PARAMS', route.params);

    const booksByCategory = BOOKS.filter((elm) => elm.status === categoryId);


    return {
        goBack,
        categoryName,
        booksByCategory,
    }

}

export default useConnect;