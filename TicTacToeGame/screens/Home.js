import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TButton from '../components/TButton';
import Board from '../components/Board';
import Title from '../components/Title';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
      <Title text="Tic Tac Toe" />
      <Board />
      <View style={styles.buttonContainer}>
        <TButton title="Rules" onPress={() => navigation.navigate('Rules')} />
        <TButton title="Credits" onPress={() => navigation.navigate('Credit')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  homeText: {
    position: 'absolute',
    top: 50,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Home;
