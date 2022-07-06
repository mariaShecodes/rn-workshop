import React, { memo } from 'react';
import { BaseText } from './styles';

const Text = ({ children, variant = 'subtitle', style }) => {
  return (
    <BaseText variant={variant} style={style}>
      {children}
    </BaseText>
  );
};

export default memo(Text);
