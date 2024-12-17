import {Location} from 'iconsax-react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/color';

const CustomMarker = () => {
  return (
    <View>
      <Location size="40" color={Colors.RED} variant="Bold" />
    </View>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({});
