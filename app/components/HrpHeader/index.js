import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import HrpIcon from '../HrpIcon';

const HrpHeader = ({
  onBack,
  iconName,
  iconSize,
  iconColor,
  iconType,

  ...props
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.headerButton} {...props}>
        <HrpIcon
          name={iconName}
          size={iconSize}
          type={iconType}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 2,
  },
});

HrpHeader.defaultProps = {
  onBack: () => null,
};

HrpHeader.propTypes = {
  onBack: PropTypes.func,
};

export default HrpHeader;
