import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/color';
import {ArrowCircleRight2, ArrowRight2, Star} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from '../../utils/routes';

const CustomCallout = ({title, description, point}) => {
  const navigation = useNavigation();
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity>
          <ArrowCircleRight2 size={'32'} color={Colors.GREEN} variant="Bold" />
        </TouchableOpacity>
      </View>
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
