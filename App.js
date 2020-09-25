import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  const createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  return (
    <Provider store={store}>
      <NavigationContainer>
        {createHomeStack()}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
