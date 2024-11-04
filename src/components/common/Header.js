import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const Header = ({buttonProps}) => {
  return (
    <View>
        <FlatList
        data={buttonProps} 
        renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={item.onPress} style={styles.backButton}>
              </TouchableOpacity>
              <Text style={styles.headerText}>{item.title}</Text>
          </View>
        )}
        scrollEnabled={false}
        numColumns={2}
      />
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
});