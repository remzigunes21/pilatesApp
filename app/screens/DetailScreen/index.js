import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../BaseScreen';
import HrpContainer from '../../components/HrpContainer';

export class DetailScreen extends BaseScreen {
  render() {
    return (
      <HrpContainer>
        <Text> DetailScreen </Text>
      </HrpContainer>
    );
  }
}

export default DetailScreen;
