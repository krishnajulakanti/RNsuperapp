import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import LoanHeader from '../common/LoanHeader';

const Menu = () => {
    return (
        <View style={styles.container}>

      <View style={styles.header}>
        <LoanHeader />
      </View>

      <View style={styles.mainContainer}>
        
      </View>

    </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    loanItem: {
      backgroundColor: '#fff',
      marginVertical: 8,
      padding: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 2,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    label: {
      color: '#666',
      fontSize: 14,
    },
    value: {
      color: '#333',
      fontSize: 16,
      fontWeight: 'bold',
    },
    status: {
      marginTop: 8,
      alignSelf: 'flex-end',
      color: '#4CAF50',
      fontWeight: 'bold',
    },
    expandable: {
      padding: 16,
      backgroundColor: '#fff',
      marginTop: 8,
    },
    expandableText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
  });
