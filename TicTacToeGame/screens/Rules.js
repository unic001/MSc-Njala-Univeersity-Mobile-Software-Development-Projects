import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TButton from '../components/TButton';
import Title from '../components/Title';

const Rules = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#304463" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.headerText} onPress={() => navigation.navigate('Home')}>Rules</Text>
      </View>
      <Title text="Rules" />
      <Text style={styles.rulesText}>
        You probably already know how to pay Tic-Tac-Toe. 
        It is really simple game, right? That's what most people think. {"\n\n"}
        *****Rules for Tic-Tac-Toe*****{"\n\n"}
        1. The game is played on a grid that is 3 squares by 3 Squares{"\n\n"}
        2. You are X, and Your friend (or the computer in this case)is O.
        players take turns putting their marks in empty square. {"\n\n"}
        3. The First player to get 3 of her marks in row(up, down,across,or diagonally)
        is the WINNER. {"\n\n"}
        4. When all 9 squares are full, the is OVER! If no player has 3 marks in a row, the game ends in a TIE
      </Text>
      
      <TButton title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EEEDEB',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#304463',
    marginLeft: 10,
  },
  rulesText: {
    marginVertical: 20,
    fontSize: 16,
    textAlign: 'justify',
    backgroundColor:'#758694'
  },
});

export default Rules;
