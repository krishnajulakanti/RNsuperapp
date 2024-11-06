import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const BottomNavigation = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>Pay EMI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>EMI Calc</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>Menu</Text>
      </TouchableOpacity>
    </View>
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
