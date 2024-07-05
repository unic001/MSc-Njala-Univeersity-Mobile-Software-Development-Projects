import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    backgroundColor: '#1A5319',
    paddingHorizontal: 20,
    paddingVertical:10,
    margin: 5,
    alignItems: 'center',
    
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TButton;
