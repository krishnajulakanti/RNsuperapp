import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const Footer = ({buttonProps}) => {
  return (
    <View>
        <FlatList
        data={buttonProps} 
        renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={item.onPress} style={ item.varient === 'secondary'? styles.cancelButton: styles.proceedButton}>
                <Text style={item.varient === 'secondary'? styles.cancelButtonText: styles.proceedButtonText}>{item.title}</Text>
              </TouchableOpacity>
          </View>
        )}
        scrollEnabled={false}
        numColumns={2}
      />
      </View>
  );
};

export default Footer;

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
      width: 200,
    },
    cancelButton: {
      flex: 1,
      width: 20,
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
