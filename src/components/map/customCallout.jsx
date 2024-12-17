import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/color';
import {Star} from 'iconsax-react-native';

const CustomCallout = ({title, description, point}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between,',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Star size={16} color={Colors.ORANGE} variant="Bold" />
          <Text style={{fontWeight: '700', fontSize: 12, marginLeft: 5}}>
            {point}
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: Colors.GRAY}}>
        {description}
      </Text>
    </View>
  );
};

export default CustomCallout;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    backgroundColor: Colors.WHITE,
    padding: 5,
  },
});
