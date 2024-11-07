import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../loans/Dashboard';
import Offers from '../loans/Offers';
import PayEmi from '../loans/PayEmi';
import EmiCalculator from '../loans/EmiCalculator';
import Menu from '../loans/Menu';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false, tabBarStyle: styles.footer }}>
      <BottomTab.Screen name='Dashboard' component={Dashboard} />
      <BottomTab.Screen name='Offers' component={Menu} />
      <BottomTab.Screen name='Pay EMI' component={Menu} />
      <BottomTab.Screen name='EMI Calc' component={Menu} />
      <BottomTab.Screen name='Menu' component={Menu} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F5F0EB',
    height: 80,
    paddingBottom: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    color: '#333',
  },
});
