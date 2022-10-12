import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetails from "../screens/RestaurantDetails";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import OrdersScreen from "../screens/OrdersScreen";
import {FontAwesome5, Foundation, MaterialIcons} from "@expo/vector-icons";


const Stack = createNativeStackNavigator();

export function RootNavigator () {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantDetails} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: 'white'}}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />
            }} />
            <Tab.Screen name="Orders" component={OrdersScreen} options={{
                tabBarIcon: ({color}) => <MaterialIcons name="list-alt" size={24} color={color} />
            }} />
            <Tab.Screen name="Profile" component={HomeScreen} options={{
                tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={20} color={color} />
            }} />
        </Tab.Navigator>
    );
}
export default HomeTabs;
