import React from 'react';

import {connect} from 'react-redux';
import {View, Text} from 'react-native';

import BaseScreen from '../screens/BaseScreen';
import FlashMessage, {showMessage} from 'react-native-flash-message';

class AlertPopup extends BaseScreen {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.alert.isVisible) {
      showMessage(this.props.alert.alertObj);
      this.dispatchAction(this.actionType().HIDE_COMMON_ALERT);
    }
  }

  render() {
    return <FlashMessage position="top" />;
  }
}

function mapStateToProps(state) {
  return {
    alert: state.productReducer.alert,
  };
}

export default connect(mapStateToProps)(AlertPopup);
