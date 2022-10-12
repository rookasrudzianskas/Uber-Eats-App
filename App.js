import { StatusBar } from 'expo-status-bar';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Restaurants from './src/assets/data/restaurants.json'
import { LogBox } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetails from "./src/screens/RestaurantDetails";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";

LogBox.ignoreLogs(['SplashScreen.show']);

export default function App() {
    return (
        <View className="h-screen">
            {/*<HomeScreen />*/}
            {/*<RestaurantDetails />*/}
            <DishDetailsScreen />
            <StatusBar style="auto" />
        </View>
    );
}

