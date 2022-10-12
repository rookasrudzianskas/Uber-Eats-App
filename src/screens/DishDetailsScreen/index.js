import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign, Feather} from "@expo/vector-icons";
import Restaurants from '../../assets/data/restaurants.json';

const DishDetailsScreen = () => {
    const dish = Restaurants[0]?.dishes[0];
    const [quantity, setQuantity] = useState(1);
    return (
        <View className="relative h-screen bg-gray-100">
            <View className="px-4">
                <TouchableOpacity activeOpacity={0.7} className="mt-16">
                    <Feather name="arrow-left" size={28} color="black" />
                </TouchableOpacity>
                <View className="mt-7">
                    <Text className="text-2xl font-[600]">{dish?.name}</Text>
                    <Text className="text-gray-600 text-[15px] mt-3">{dish?.description}</Text>
                </View>
            </View>
            <View className="border-b border-gray-300 my-6"/>

            <View className="flex-row items-center justify-center space-x-4 mt-3">
                <TouchableOpacity activeOpacity={0.7}>
                    <AntDesign name="pluscircleo" size={35} color="black" />
                </TouchableOpacity>
                <Text className="text-gray-900 text-[17px]">{quantity}</Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <AntDesign name="minuscircleo" size={35} color="black" />
                </TouchableOpacity>
            </View>

            <View className="absolute bottom-10 right-1 left-1 flex-row items-center justify-between mx-4 bg-black py-4 rounded-sm">
                <View></View>
                <Text className="text-white text-[15px] font-semibold ml-16">Add 2 to basket</Text>
                <Text className="text-white mr-3">23.90 $</Text>
            </View>
        </View>
    );
};

export default DishDetailsScreen;
