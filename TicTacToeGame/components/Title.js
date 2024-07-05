import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    marginBottom:10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#304463',
    paddingHorizontal:100,
    borderRadius: 15,
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Title;
