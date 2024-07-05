import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Rules from './screens/Rules';
import Credit from './screens/Credit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Credit" component={Credit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
