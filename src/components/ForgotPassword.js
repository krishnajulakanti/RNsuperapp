import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ForgotPasswordScreen = ({ navigation }) => {

  const headerProps = [
    {
      // size: 'default',
      title: 'Forgot Password',
      onPress: () => {
        navigation.goBack();
      },
    },
  ];
  const footerProps = [
    {
      // size: 'default',
      varient: 'secondary',
      title: 'CANCEL',
      onPress: () => {
        navigation.goBack();
      },
    },
    {
      // size: 'default',
      varient: 'primary',
      title: 'PROCEED',
      onPress: () => {
        navigation.navigate('OtpVerificationScreen');
      },
    },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <Header buttonProps={headerProps}/>
      </View>

      {/* Input Fields */}
        <Text style={styles.label}>LAN ID</Text>
        <TextInput
          style={styles.input}
          // placeholder="200171XXXXXXXXXX2348"
          // placeholderTextColor="black"
        />
        <Text style={styles.label}>Registered Mobile No.</Text>
        <TextInput
          style={styles.input}
          // placeholder="9944455999"
          // placeholderTextColor="black"
          keyboardType="phone-pad"
        />

      <Footer buttonProps={footerProps}/>

    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
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
    fontSize: 24,
    color: '#2E6C50',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  label: {
    fontSize: 12,
    color: '#A1A241',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A1A241',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 550,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#2E6C50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  proceedButton: {
    flex: 1,
    backgroundColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    marginLeft: 10,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
