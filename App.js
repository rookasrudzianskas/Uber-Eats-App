import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RestaurantItem from "./src/components/RestaurantItem";
import Restaurants from './src/assets/data/restaurants.json'

export default function App() {
    return (
        <View className="h-screen mt-10">
            <RestaurantItem restaurant={Restaurants[0]} />
            <RestaurantItem restaurant={Restaurants[1]} />
            <RestaurantItem restaurant={Restaurants[2]} />
            <RestaurantItem restaurant={Restaurants[3]} />
            <StatusBar style="auto" />
        </View>
    );
}

