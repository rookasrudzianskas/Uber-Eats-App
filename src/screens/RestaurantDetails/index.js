import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import Restaurants from '../../assets/data/restaurants.json';
import {StatusBar} from "expo-status-bar";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import {useNavigation, useRoute} from "@react-navigation/native";

const RestaurantDetails = () => {
    const restaurant = Restaurants[0];
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params?.id;
    // console.warn(id)
    return (
        <View className="relative bg-gray-100 h-screen">
            <StatusBar style="light" />
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute z-50 items-center justify-center top-10 left-4 bg-white w-10 h-10 rounded-full" activeOpacity={0.7}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                    <RestaurantHeader restaurant={restaurant} />
                )} data={restaurant.dishes} renderItem={({item}) => <DishListItem dish={item} />} />
            </View>
        </View>
    );
};

export default RestaurantDetails;
