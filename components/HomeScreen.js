import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to SMFG</Text>
        {/* <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity> */}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    loginButton: {
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 25,
      backgroundColor: '#007B55',
    },
    loginText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
  });

export default HomeScreen;
