import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card, Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from '@rneui/themed'

import Header from '../../../common/Header';

const headerProps =
{
  title: 'Pay EMI',
  onPress: () => {
    navigation.goBack();
  },
};

const accordionList = [
  {
    id: 1,
    name: 'Home Loan',
  },
  {
    id: 2,
    name: 'Recommended',
  }, ,
  {
    id: 3,
    name: 'UPI Autopay',
  }, ,
  {
    id: 4,
    name: 'NEFT/IMPS/RTGS',
  }, ,
  {
    id: 5,
    name: 'Debit/Credit Cards',
  },
];

const PaymentOptions = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [banks] = useState([
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'ICICI Bank', value: 'icici' },
    { label: 'Yes Bank', value: 'yes' },
  ]);
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    setAccordions(accordionList);
    console.log(accordionList, 'accordionList');
    console.log(accordions, 'accordions');
  }, [accordions]);

  const [accordionState, setAccordionState] = useState({
    loanDetails: true,
    recommended: false,
    upiAutopay: false,
    neft: false,
    debitCredit: false,
  });

  const [expanded, setExpanded] = useState(true);

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <View style={styles.container}>
      <Header buttonProps={headerProps} />

      <View style={styles.mainContainer}>
        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>Home Loan</ListItem.Title>
                <Text style={styles.subText}>Your transaction is secured with 256-bit encryption</Text>
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
                    {renderLoanItem(l)}
                  </ListItem.Content>
                </ListItem>
              ))} */}
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>Recommended</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View style={styles.recommendedSection}>
              <View style={styles.paymentContainer}>
                <Card style={styles.card}>
                  <Text style={styles.paymentLabel}>BHIM</Text>
                </Card>
                <Card style={styles.qrCodeCard}>
                  <Text>QR Code</Text>
                  <Text style={styles.qrText}>Scan & Pay with any UPI App</Text>
                </Card>
              </View>
            </View>
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>UPI Autopay</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            {/* <View style={styles.paymentOptions}>
                        <View style={styles.iconRow}>
                            <MaterialIcons name="google" size={30} />
                            <MaterialIcons name="phone-android" size={30} />
                            <MaterialIcons name="payment" size={30} />
                            <MaterialIcons name="amazon" size={30} />
                        </View>
                        <TextInput style={styles.input} placeholder="Enter UPI ID" />
                    </View> */}
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>NEFT/IMPS/RTGS</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View>
              {banks.map((bank) => (
                <Card key={bank.value} style={styles.bankCard}>
                  <Text>{bank.label}</Text>
                </Card>
              ))}
              <DropDownPicker
                open={open}
                value={selectedBank}
                items={banks}
                setOpen={setOpen}
                setValue={setSelectedBank}
                style={styles.dropdown}
              />
            </View>
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>Debit/Credit Cards</ListItem.Title>
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
                    {renderLoanItem(l)}
                  </ListItem.Content>
                </ListItem>
              ))} */}
          </ListItem.Accordion>
        </View>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#DDDDDD',
  },
  mainContainer: {
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 800,
    paddingTop: 15
  },
  accordionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  subText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  recommendedSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    padding: 16,
    marginRight: 10,
  },
  qrCodeCard: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
  },
  qrText: {
    fontSize: 10,
    color: 'gray',
  },
  paymentOptions: {
    marginTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
  },
  bankCard: {
    padding: 16,
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  proceedButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#004831',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  loanItem: {
    backgroundColor: '#FFFFFF',
    // marginLeft: 0,
    borderRadius: 10,
    shadowColor: '#999999',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },
  accordionCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginVertical: 1,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: '#999999',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },
  accordionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333333',
  },
  lanIdCard: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  tenureCard: {
    backgroundColor: '#DDDDDD',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  label: {
    color: '#666666',
    fontSize: 14,
    paddingRight: 50,
  },
  value: {
    color: '#333333',
    fontSize: 16,
    // fontWeight: 'bold',
  },
  status: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#D3FFCE',
    color: '#666666',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  expandable: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  expandableText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#333',
  },
});

export default PaymentOptions;
