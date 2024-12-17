import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/color';

const FloatActionButton = props => {
  const {icon, customStyle} = props;
  return (
    <TouchableOpacity {...props} style={[styles.container, customStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    zIndex: 99,
    bottom: 30,
    width: 60,
    height: 60,
    right: 20,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
