import { StatusBar } from 'expo-status-bar';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RestaurantItem from "./src/components/RestaurantItem";
import Restaurants from './src/assets/data/restaurants.json'

export default function App() {
    return (
        <View className="h-screen mt-10">
            <FlatList data={Restaurants} showsVerticalScrollIndicator={false} renderItem={({item}) => <RestaurantItem restaurant={item} />} keyExtractor={(item) => item.id} />
            <StatusBar style="auto" />
        </View>
    );
}

