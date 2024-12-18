import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height} from '../../utils/constans';
import CustomInput from '../uı/customInput';
import {SearchNormal} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomInput
          placeholder="Search here..."
          icon={<SearchNormal color="#b2b2b2" />}
        />
      </View>
      <Text style={{fontSize: 35, fontWeight: '600'}}>Notes</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    justifyContent: 'space-between',
    paddingTop: height * 0.07,
    paddingBottom: height * 0.03,
  },
});
