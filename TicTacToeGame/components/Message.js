import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     marginVertical: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Message;
