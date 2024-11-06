import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../components/login/LoginScreen';
import OtpVerificationScreen from '../components/login/OtpVerificationScreen';
import ForgotPasswordScreen from '../components/login/ForgotPassword';
import ResetPasswordScreen from '../components/login/ResetPasswordScreen';
import BottomNavigation from '../components/features/common/BottomNavigation';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomNavigation" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      {/* <Stack.Screen name="FeatureNavigation" component={FeatureNavigation} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
