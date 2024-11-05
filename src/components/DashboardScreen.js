import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

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

const DashboardScreen = () => {
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
      <TouchableOpacity style={styles.expandable}>
        <Text style={styles.expandableText}>Loan Against Securities</Text>
      <FlatList
        data={loanData}
        renderItem={renderLoanItem}
        keyExtractor={(item) => item.id}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.expandable}>
        <Text style={styles.expandableText}>Home Loans</Text>
      </TouchableOpacity>
      {/* Footer Navigation */}

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
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#EDEDED',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});
