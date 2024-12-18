import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {ADDNOTE, DETAIL, NOTES} from '../utils/routes';
import Detail from '../screens/detail';
import Notes from '../screens/notes';
import AddNote from '../screens/notes/addNote';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={NOTES}
        component={Notes}
      />
      <Stack.Screen name={ADDNOTE} component={AddNote} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
