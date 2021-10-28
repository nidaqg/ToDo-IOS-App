import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './app/infrastructure/navigation/HomeNavigator';

//import icons from expo for tab
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    null
  )
}

export default function App() {

  return (
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
      tabBarActiveTintColor: 'dodgerblue',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>


    </NavigationContainer>
  );
}

