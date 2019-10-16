import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={23}
      IconComponent={Icon}
      color={Platform.OS === 'android' ? 'white' : Colors.white}
    />
  );
};

export default CustomHeaderButton;
