import firestore from '@react-native-firebase/firestore';
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import CustomInput from '../../components/uı/customInput';
import {NoteAdd, NoteText, Calendar} from 'iconsax-react-native';
import {Colors} from '../../theme/color';
import CustomButton from '../../components/uı/customButton';

const AddNote = () => {
  const [title, setTitle] = useState('title1');
  const [description, setDescription] = useState('description1');
  const [date, setDate] = useState('September 25,2021');
  const [loading, setLoading] = useState(false);

  const saveNote = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      date: date,
    };

    // Save to Firestore
    firestore()
      .collection('Notes')
      .add(form)
      .then(() => {
        setLoading(false);
        console.log('Note added!');
      })
      .catch(error => {
        setLoading(false);
        console.error('Error adding note: ', error);
      });
  };

  return (
    <View style={screenStyle.container}>
      <CustomInput
        onChangeText={value => setTitle(value)}
        value={title}
        inputTitle="Title"
        placeholder="Title"
        icon={<NoteAdd color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDescription(value)}
        value={description}
        inputTitle="Description"
        placeholder="Description"
        icon={<NoteText color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDate(value)}
        value={date}
        inputTitle="Date"
        placeholder="Date"
        icon={<Calendar color={Colors.GRAY} />}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomButton
          loading={loading}
          onPress={() => saveNote()}
          title="ADD NOTE"
        />
      </View>
    </View>
  );
};

export default AddNote;
