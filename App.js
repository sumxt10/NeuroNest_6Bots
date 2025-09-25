import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import DeviceInfo from './src/screens/DeviceInfo';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="DeviceInfo"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#13a4ec',
          tabBarInactiveTintColor: '#6b7280', // gray
          tabBarStyle: {
            backgroundColor: '#f6f7f8',
            borderTopWidth: 0.5,
            borderTopColor: '#d1d5db',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'History') iconName = 'history';
            else if (route.name === 'DeviceInfo') iconName = 'smartphone';
            else if (route.name === 'Settings') iconName = 'settings';

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="DeviceInfo" component={DeviceInfo} options={{ title: 'Device Info' }} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
