import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed'

import LoanHeader from '../common/LoanHeader';
// import BottomNavigation from '../common/BottomNavigation';

// Sample loan data
const loanData = [
  {
    id: '1',
    lanId: '200171XXXXXXXX2348',
    tenure: 36,
    loanAmount: '10,00,000.00',
    emiAmount: '33,694.00',
    status: 'Active',
  },
  {
    id: '2',
    lanId: '352171XXXXXXXX2348',
    tenure: 48,
    loanAmount: '20,00,000.00',
    emiAmount: '38,694.00',
    status: 'Active',
  },

  // Add more loan entries here
];
const accordionList = [
  {
    id: 1,
    name: 'Loans Against Securities',
  },
  {
    id: 2,
    name: 'Home Loans',
  },
];

const DashboardScreen = () => {

  const [expanded, setExpanded] = useState(true);

  const renderLoanItem = ({ item }) => (
    <View style={styles.loanItem}>
      <Text style={styles.label}>LAN ID</Text>
      <Text style={styles.value}>{item.lanId}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Tenure</Text>
        <Text style={styles.label}>Loan Amount</Text>
        <Text style={styles.label}>EMI Amount</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>{item.tenure}</Text>
        <Text style={styles.value}>{item.loanAmount}</Text>
        <Text style={styles.value}>{item.emiAmount}</Text>
      </View>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <LoanHeader />
      </View>

      <View style={styles.mainContainer}>
        {accordionList.map((item, index) => {
          <View key={index}>
            <ListItem.Accordion
              content={
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
              }
              isExpanded={expanded}
              onPress={() => {
                setExpanded(!expanded);
              }}
            >
              {/* {loanData.map((l, i) => (
                <ListItem key={l.lanId}>
                  <ListItem.Content>
                    <ListItem.Title>{l.lanId}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))} */}
            </ListItem.Accordion>
          </View>
        })}
      </View>

    </View>
  );
};

export default DashboardScreen;

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
