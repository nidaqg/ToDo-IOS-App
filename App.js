import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDo from './app/screens/ToDo';
import WelcomeScreen from './app/screens/WelcomeScreen';
import TaskGroups from './app/screens/TaskGroups';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="TaskGroups"
          component={TaskGroups}
        />
        <Stack.Screen 
        name="ToDo" 
        component={ToDo} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

