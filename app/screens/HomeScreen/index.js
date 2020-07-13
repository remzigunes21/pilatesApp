import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../BaseScreen';
import HrpContainer from '../../components/HrpContainer';

export class HomeScreen extends BaseScreen {
  render() {
    return (
      <HrpContainer>
        <Text> Home Screen</Text>
      </HrpContainer>
    );
  }
}

export default HomeScreen;
