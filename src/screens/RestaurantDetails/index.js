import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import Restaurants from '../../assets/data/restaurants.json';
import {StatusBar} from "expo-status-bar";
import DishListItem from "../../components/DishListItem";

const RestaurantDetails = () => {
    const restaurant = Restaurants[0];
    return (
        <View className="bg-gray-100 h-screen">
            <StatusBar style="light" />
            <Image className="relative w-[100%]" style={{aspectRatio: 9 / 5}} source={{uri: restaurant?.image}} />
            <TouchableOpacity className="absolute items-center justify-center top-10 left-4 bg-white w-10 h-10 rounded-full" activeOpacity={0.7}>
                <AntDesign name="arrowleft" size={24} color="black" style={{backgroundColor: 'transparent'}} />
            </TouchableOpacity>
            <View className="mx-4 mt-5">
                <Text className="text-3xl font-[600] text-gray-900">{restaurant?.name}</Text>
                <View className="flex-row items-center space-x-1 mt-1">
                    <Text className="text-gray-500 text-[15px]">${restaurant?.deliveryFee}</Text>
                    <Text className="text-gray-500 text-[15px]">•</Text>
                    <Text className="text-gray-500 text-[15px]">{restaurant?.rating}</Text>
                    <FontAwesome name="star" style={{marginVertical: 6}} size={17} color="#ffaa00" />
                </View>
            </View>
            <View className="border-b border-gray-300 border mt-5"/>
            <View>
                <Text className="text-lg font-[600] text-gray-600 mx-4 mt-2">Menu</Text>
            </View>
            <View>
                <DishListItem dish={restaurant.dishes[0]} />
                <DishListItem dish={restaurant.dishes[0]} />
            </View>
        </View>
    );
};

export default RestaurantDetails;
