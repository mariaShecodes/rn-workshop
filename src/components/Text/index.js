import React, { memo } from 'react';
import { BaseText } from './styles';

const Text = ({ title, variant = 'subtitle', style }) => {
  return (
    <BaseText variant={variant} style={style}>
      {title}
    </BaseText>
  );
};

export default memo(Text);
