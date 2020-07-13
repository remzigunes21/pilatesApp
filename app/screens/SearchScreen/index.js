import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../BaseScreen';
import HrpContainer from '../../components/HrpContainer';

export class SearchScreen extends BaseScreen {
  render() {
    return (
      <HrpContainer>
        <Text> SearchScreen </Text>
      </HrpContainer>
    );
  }
}

export default SearchScreen;
