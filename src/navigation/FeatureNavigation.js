import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyProfile from '../components/features/loans/MyProfile';
import PaymentOptions from '../components/features/loans/PayEmi/PaymentOptions';

const Stack = createNativeStackNavigator();

const FeatureNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="MyProfile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
    </Stack.Navigator>
  );
};

export default FeatureNavigation;
