import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {DETAIL} from '../utils/routes';
import Detail from '../screens/detail';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
