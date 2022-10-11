import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RestaurantItem from "./src/components/RestaurantItem";

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

