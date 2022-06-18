import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// @screens
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/Home';
import AddProductScreen from '../screens/AddProduct/AddProduct';
// @config
import { routeHomeConfig } from './routeConfig';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  AddProduct: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={routeHomeConfig} />
      <Stack.Screen name='Home' component={HomeScreen} options={routeHomeConfig} />
      <Stack.Screen name='AddProduct' component={AddProductScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  )
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
};