import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Board = () => {
  const board = [
    ['O', 'X', '0'],
    ['', 'X', ''],
    ['X', '', 'O']
  ];

  return (
    <View style={styles.board}>
      {board.flat().map((cell, index) => (
        <View key={index} style={styles.cell}>
          <Text style={styles.cellText}>{cell}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    borderWidth: 10,
    borderColor: '#009FBD',
    backgroundColor: '#4A249D',
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    fontSize: 48,
    color: '#F6F5F5',
    fontWeight: 'bold',
  },
});

export default Board;
