import React, { memo } from 'react';
import { Container, Lateral, Center } from './styles';
import Text from '../Text';
import IconButton from '../IconButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({
  onPressLeft,
  onPressRight,
  title,
  leftIcon,
  rightIcon,
  style,
}) => {
  const { top: safeTop } = useSafeAreaInsets();
  return (
    <Container safeTop={safeTop} style={style}>
      <Lateral>
        {onPressLeft && (
          <IconButton onPressIcon={onPressLeft} icon={leftIcon} />
        )}
      </Lateral>
      <Center>{title && <Text variant="header">{title}</Text>}</Center>
      <Lateral isRight>
        {onPressRight && (
          <IconButton onPressIcon={onPressRight} icon={rightIcon} />
        )}
      </Lateral>
    </Container>
  );
};

export default memo(Header);
