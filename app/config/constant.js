import React from 'react';
import {Dimensions, Platform, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

const screen = {
  width,
  height,
};

const device = {
  isIOS: Platform.OS === 'ios',
  os: Platform.OS,
};

export {screen, device};
