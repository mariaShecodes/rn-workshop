import React, { memo } from 'react';
import { Container, Lateral, Center } from './styles';
import Text from '../Text';
import IconButton from '../IconButton';

const Header = ({ onPressLeft, onPressRight, title, leftIcon, rightIcon }) => {
  return (
    <Container>
      <Lateral>
        {onPressLeft && (
          <IconButton onPressIcon={onPressLeft} icon={leftIcon} />
        )}
      </Lateral>
      <Center>{title && <Text title={title} variant="header" />}</Center>
      <Lateral right>
        {onPressRight && (
          <IconButton onPressIcon={onPressRight} icon={rightIcon} />
        )}
      </Lateral>
    </Container>
  );
};

export default memo(Header);
