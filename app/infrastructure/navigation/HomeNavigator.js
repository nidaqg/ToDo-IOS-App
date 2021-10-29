import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ToDo} from '../../features/ToDo/ToDo';
import {TaskGroups} from '../../features/HomePage/TaskGroups';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {

    return (
        <>
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
      </>
    )
}