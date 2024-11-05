import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Header = ({buttonProps}) => {
  return (
    <View style={styles.header}>
      <View style={styles.backButton}>
      <TouchableOpacity onPress={buttonProps.onPress}>
        <Text style={styles.backButtonText}>Back</Text>
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
    color: 'black',
    height: 80,
    backgroundColor: '#DDDDDD',
  },
  backButton: {
    marginRight: 90,
  },
  backButtonText: {
    fontSize: 15,
    color: 'black',
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
