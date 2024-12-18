import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/color';
import {height} from '../../utils/constans';
import {Edit2} from 'iconsax-react-native';
import {setColors} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {EDITNOTE} from '../../utils/routes';

const NotesCard = ({note, index}) => {
  const navigation = useNavigation();
  console.log(note);
  return (
    <View
      style={{
        backgroundColor: setColors(index),
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
      }}>
      <View style={{minHeight: height * 0.14}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{note.title}</Text>
        <Text style={{fontSize: 18, fontWeight: '300', marginVertical: 8}}>
          {note.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text> {note.date} </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(EDITNOTE, {note: note})}
          style={{
            backgroundColor: Colors.BLACK,
            borderRadius: 100,
            padding: 10,
          }}>
          <Edit2 size="20" color={Colors.WHITE} variant="Bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotesCard;
