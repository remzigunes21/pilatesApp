import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../BaseScreen';
import {HrpContainer} from '../../components';

export class ProfileScreen extends BaseScreen {
  render() {
    return (
      <HrpContainer>
        <Text> ProfileScreen </Text>
      </HrpContainer>
    );
  }
}

export default ProfileScreen;
