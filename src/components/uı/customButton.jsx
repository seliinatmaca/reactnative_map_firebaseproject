import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import {height} from '../../utils/constans';
import {Colors} from '../../theme/color';

// create a component
const CustomButton = props => {
  const {loading, title, style} = props;
  return (
    <TouchableOpacity
      disabled={loading}
      {...props}
      style={[
        styles.container,
        loading ? styles.disableButton : styles.activeButton,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.WHITE} />
      ) : (
        <Text
          style={{
            fontWeight: 'bold',
            color: Colors.WHITE,
            fontSize: 15,
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.06,
    borderRadius: 100,
    marginVertical: 5,
  },
  disableButton: {
    backgroundColor: Colors.GRAY,
  },
  activeButton: {
    backgroundColor: Colors.BLACK,
  },
});

//make this component available to the app
export default CustomButton;
