import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import _style from './styles';

const HrpCard = ({children, style, onPress}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{..._style.container, ...style}}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={{..._style.container, ...style}}>{children}</View>;
};

export default HrpCard;
