import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../../../assets/images/SMFG-Logo.svg';

const LoanHeader = () => {
  return (
    <View style={styles.header}>
      <Logo width={100} height={40} />
    </View>
  );
};

export default LoanHeader;

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
