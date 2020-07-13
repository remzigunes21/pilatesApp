import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../BaseScreen';
import {HrpContainer} from '../../components';

export class SettingsScreen extends BaseScreen {
  render() {
    return (
      <HrpContainer>
        <Text> SettingsScreen </Text>
      </HrpContainer>
    );
  }
}

export default SettingsScreen;
