import React, { memo, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from './styles';

const IconButton = ({ onPressIcon, icon }) => {
  const userIcon = require('../../assets/icons/user.png');
  const menuIcon = require('../../assets/icons/menu.png');
  const chevronIcon = require('../../assets/icons/chevron-left.png');

  const selectedIcon = useMemo(() => {
    if (icon === 'user') {
      return userIcon;
    }
    if (icon === 'menu') {
      return menuIcon;
    }
    return chevronIcon;
  }, [icon, userIcon, menuIcon, chevronIcon]);

  return (
    <TouchableOpacity onPress={onPressIcon}>
      <Image source={selectedIcon} />
    </TouchableOpacity>
  );
};

export default memo(IconButton);
