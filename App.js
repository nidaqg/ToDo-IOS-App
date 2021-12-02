import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './app/infrastructure/navigation/HomeNavigator';
//import icons from expo for tab
import {Ionicons} from "@expo/vector-icons";
import { TaskGroupContextProvider } from './app/infrastructure/context/GroupListContext';

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    null
  )
}

export default function App() {

  return (
    <TaskGroupContextProvider>
    <NavigationContainer>
    <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Settings') {
          iconName = 'settings-outline';
        } 

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#06304b',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>


    </NavigationContainer>
    </TaskGroupContextProvider>
  );
}

