import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from '@rneui/themed'

import LoanHeader from '../common/LoanHeader';

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

const Dashboard = () => {

  const [expanded, setExpanded] = useState(true);
  const [accordions, setAccordions] = useState([]);


  const renderLoanItem = (item) => {
    return (
      <View style={styles.loanItem}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          <Text style={styles.label}>LAN ID</Text>
          <Text style={styles.value}>{item?.lanId}</Text>
        </View>
        <View style={{ backgroundColor: '#999999', paddingHorizontal: 16, paddingVertical: 6 }}>
          <View style={styles.row}>
            <Text style={styles.label}>Tenure</Text>
            <Text style={styles.label}>Loan Amount</Text>
            <Text style={styles.label}>EMI Amount</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.value}>{item?.tenure}</Text>
            <Text style={styles.value}>{item?.loanAmount}</Text>
            <Text style={styles.value}>{item?.emiAmount}</Text>
          </View>
        </View>
        {/* <Text style={styles.status}>{item?.status}</Text> */}
      </View>
    );
  };

  const loanData = [
    {
      id: '1',
      lanId: '200171XXXXXXXX2348',
      tenure: 36,
      loanAmount: '10,00,000.00',
      emiAmount: '33,694.00',
      status: 'Active',
    },
    // {
    //   id: '2',
    //   lanId: '352171XXXXXXXX2348',
    //   tenure: 48,
    //   loanAmount: '20,00,000.00',
    //   emiAmount: '38,694.00',
    //   status: 'Active',
    // },

    // Add more loan entries here
  ];

  useEffect(() => {
    setAccordions(accordionList);
    console.log(accordionList, 'accordionList');
    console.log(accordions, 'accordions');
  }, [accordions]);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <LoanHeader />
      </View>

      <ScrollView style={styles.mainContainer}>
        {accordions.map((item, index) => (
          <View key={index}>
            <ListItem.Accordion style={styles.accordionCard}
              content={
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</ListItem.Title>
                </ListItem.Content>
              }
              isExpanded={expanded}
              onPress={() => {
                setExpanded(!expanded);
              }}
            >
              {loanData.map((l, i) => (
                <ListItem key={l.lanId}>
                  <ListItem.Content>
                    {renderLoanItem(l)}
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))}
            </ListItem.Accordion>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    paddingHorizontal: 5,
    // backgroundColor: '',
    color: 'black',
    // height:200
  },
  accordionCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginVertical: 1,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },
  loanItem: {
    backgroundColor: '#FFFFFF',
    // marginLeft: 0,
    borderRadius: 10,
    shadowColor: 'green',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  label: {
    color: '#666',
    fontSize: 14,
    paddingRight: 50,
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


{/* <ListItem.Content>
        <ListItem.Title><Text>LAN ID</Text></ListItem.Title>
        <ListItem.Subtitle>{l?.lanId}</ListItem.Subtitle>
        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: 15 }}>
          <View style={{ paddingRight: 60 }}>
            <ListItem.Title><Text>Tenure</Text></ListItem.Title>
            <ListItem.Subtitle>{l?.tenure}</ListItem.Subtitle>
          </View>
          <View style={{ paddingRight: 60 }}>

            <ListItem.Title><Text>Loan Amount</Text></ListItem.Title>
            <ListItem.Subtitle>{l?.loanAmount}</ListItem.Subtitle>
          </View>
          <View>
            <ListItem.Title><Text>EMI Amount</Text></ListItem.Title>
            <ListItem.Subtitle>{l?.emiAmount}</ListItem.Subtitle>
          </View>
        </View>
      </ListItem.Content> */}