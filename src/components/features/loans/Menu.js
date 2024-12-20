import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import LoanHeader from '../common/LoanHeader';

const menuItems = [
  { title: 'MyProfile', navigateTo: 'MyProfile' },
  { title: 'My Documents', navigateTo: 'My Documents' },
  { title: 'Service Requests', navigateTo: 'Service Requests' },
  { title: 'Branch Locator', navigateTo: 'Branch Locator' },
  { title: 'Forms', navigateTo: 'Forms' },
  { title: 'My Leads', navigateTo: 'My Leads' },
  { title: 'DNC Registration', navigateTo: 'DNC Registration' },
  { title: 'Support', navigateTo: 'Support' },
  { title: 'FAQ', navigateTo: 'FAQ' },
  { title: 'Terms of Use', navigateTo: 'Terms of Use' },
];

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View>
        <LoanHeader />
      </View>

      <ScrollView style={{ borderTopLeftRadius: 20 }}>
        {menuItems.map((item, index) => (
          <View>
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate('MyProfile')}
            >
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="radio-button-unchecked" size={24} color="#2f4f4f" />
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 13,
    paddingHorizontal: 13,
    marginRight: 16,
    marginLeft: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 20,
    color: '#154433',
    paddingLeft: 20,
  },
});
