import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../loans/DashboardScreen';
import MenuScreen from '../loans/MenuScreen';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
      <BottomTab.Navigator initialRouteName='DashboardScreen' screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name='Dashboard' component={DashboardScreen}/>
        <BottomTab.Screen name='Menu' component={MenuScreen}/>
      </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#F5F0EB',
    height: 80,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});
