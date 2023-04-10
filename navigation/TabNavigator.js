import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'paper-plane'
                            : 'paper-plane-outline';
                    } else if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                
            })}
            tabBarOptions={{
                activeTintColor: '#7B1710',
                inactiveTintColor: 'darkgrey',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator