import React, { memo, useMemo } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

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
      <Image source={selectedIcon} style={sytles.image} />
    </TouchableOpacity>
  );
};

const sytles = StyleSheet.create({
  image: {
    height: 30,
    aspectRatio: 1,
  },
});

export default memo(IconButton);
