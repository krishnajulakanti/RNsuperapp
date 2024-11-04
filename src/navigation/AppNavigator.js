import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../components/LoginScreen';
import OtpVerificationScreen from '../components/OtpVerificationScreen';
import ForgotPasswordScreen from '../components/ForgotPassword';
import ResetPasswordScreen from '../components/ResetPasswordScreen';
import DashboardScreen from '../components/DashboardScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
 return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        <Stack.Screen name="DashboardScreen" component={DashboardScreen}/>
      </Stack.Navigator>
 );
};

export default AppNavigator;
