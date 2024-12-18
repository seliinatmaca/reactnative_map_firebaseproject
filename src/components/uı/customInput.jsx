import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {height} from '../../utils/constans';

const CustomInput = props => {
  const {icon, inputTitle = null} = props;
  return (
    <View>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{inputTitle}</Text>
      <View style={styles.container}>
        {icon}
        <TextInput
          {...props}
          style={{
            height: height * 0.055,
            paddingHorizontal: 8,
            fontSize: 18,
          }}
          placeholderTextColor="#b2b2b2"
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderRadius: 8,
    marginVertical: 5,
  },
});
