/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from './app/redux/configureStore';
import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AlertPop from './app/services/AlertPop';
import Navigation from './App';

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
          {/* <AlertPop /> */}
        </NavigationContainer>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
