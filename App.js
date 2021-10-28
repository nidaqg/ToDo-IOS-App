import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDo from './app/screens/ToDo';
import TaskGroups from './app/screens/TaskGroups';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen
          name="TaskGroups"
          component={TaskGroups}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="ToDo" 
        component={ToDo} 
        options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

