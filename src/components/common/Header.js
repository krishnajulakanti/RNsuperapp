import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Header = ({buttonProps}) => {
  return (
    <View style={styles.header}>
              <TouchableOpacity onPress={ buttonProps.onPress} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>{ buttonProps.title}</Text>
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: 'black',
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 15,
    color: 'black',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
});