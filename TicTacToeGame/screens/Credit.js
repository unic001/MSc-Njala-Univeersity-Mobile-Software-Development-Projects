import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TButton from '../components/TButton';
import Title from '../components/Title';

const Credit = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#304463" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.headerText} onPress={() => navigation.navigate('Home')}>Credits</Text>
      </View>
      <Title text="Credits" />
      <Text style={styles.creditsText}>
        In the realm of X's and O's upon the grid they go,
        Where two contenders face off, in tic-tac-toe.
        A pencil mark, a battle stark, lines cross like ancient runes,
        Each player seeks, with tactic sleek, to align their threes and twos. {"\n\n"}
        First goes X, with hopes to vex, in the corner she resides,{"\n"}
        Then O's response, a parry, a taunt, beside the X she slides{"\n"}
        The square becomes a battleground where silent worriors clash,{"\n"}
        With every mark, they leave their spark, in this timeless match.{"\n\n"}
        A diagonal attempt, an intercept, the X's mark their claim, {"\n"}
        But O is Shrewd, not easily subdued, and block the path to fame.{"\n"}
        
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
  creditsText: {
    marginVertical: 20,
    fontSize: 16,
    textAlign: 'justify',
    backgroundColor:'#758694',
    borderRadius:5,
    
  },
});

export default Credit;
