// import { Icon } from '@rneui/themed/dist/Icon';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({buttonProps}) => {
  return (
    <View style={styles.header}>
      <View style={styles.backButton}>
      <TouchableOpacity onPress={buttonProps.onPress}>
        <Text style={styles.backButtonText}>
          {/* Back */}
          {'\u2190'}
          {/* <Icon name="arrow-back-outline" size={24} color="#333" /> */}
        </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.headerText}>{buttonProps.title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-beween',
    marginBottom: 20,
    paddingHorizontal: 20,
    color: '#333333',
    height: 80,
    backgroundColor: '#DDDDDD',
  },
  backButton: {
    marginRight: 90,
  },
  backButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    // textAlign: 'center',
    // flex: 1,
  },
  title: {
    alignItems: 'center',
  }
});
