import { useCallback } from 'react';
import { useNavigation as useBaseNavigation } from '@react-navigation/native';

const useNavigation = () => {
  const { canGoBack, goBack: baseGoBack, ...rest } = useBaseNavigation();

  const goBack = useCallback(() => {
    if (canGoBack()) {
      baseGoBack();
    }
  }, [canGoBack, baseGoBack]);

  return {
    goBack,
    ...rest,
  };
};

export default useNavigation;
