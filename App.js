import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDo from './app/screens/ToDo';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
        name="ToDo" 
        component={ToDo} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

