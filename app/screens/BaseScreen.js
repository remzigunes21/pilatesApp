import React from 'react';
import store from '../redux/configureStore';
import * as actionTypes from '../redux/actionTypes';
import DeviceInfo from 'react-native-device-info'

class BaseScreen extends React.Component {
  constructor(props) {
    super(props);
   
  
  }

  actionType() {
    return actionTypes;
  }

  reduxStore() {
    return store;
  }

  dispatchAction() {
    if (arguments.length === 2) {
      this._dispatchActionWithType(...arguments);
    } else {
      if (arguments.length === 1) {
        if (arguments[0].type) {
          this._dispatchAction(...arguments);
        } else {
          this._dispatchAction({type: arguments[0]});
        }
      }
    }
  }

  listenStore(callback) {
    store.subscribe(callback);
  }

  _dispatchAction(action) {
    store.dispatch(action);
  }

  _dispatchActionWithType(type, payload) {
    this._dispatchAction({type, payload});
  }


  isSimulator() {
   
    return DeviceInfo.isEmulator();

  }

}

export default BaseScreen;
