import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RestaurantItem from "./src/components/RestaurantItem";
import Restaurants from './src/assets/data/restaurants.json'

export default function App() {
    return (
        <View className="h-screen mt-10">
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <StatusBar style="auto" />
        </View>
    );
}

