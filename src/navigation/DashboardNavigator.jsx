import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import DashBoardScreen from '../ui/dashboard';
import SplashScreen from '../ui/splash_screen';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={SplashScreen} name={'SplashScreen'} />
      <Stack.Screen component={DashBoardScreen} name={'DashBoardScreen'} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
