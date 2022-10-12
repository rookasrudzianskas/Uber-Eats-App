import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {AntDesign, Feather} from "@expo/vector-icons";
import Restaurants from '../../assets/data/restaurants.json';
import BasketDishItem from "../../components/BasketDishItem";

const Basket = () => {
    const restaurant = Restaurants[0];
    return (
        <View className="relative h-screen bg-gray-100">
            <View className="px-4">
                <TouchableOpacity activeOpacity={0.7} className="mt-16">
                    <Feather name="arrow-left" size={28} color="black" />
                </TouchableOpacity>
                <View className="mt-7">
                    <Text className="text-3xl font-[600]">{restaurant?.name}</Text>
                    {/*<Text className="text-gray-600 text-[15px] mt-3">{restaurant?.description}</Text>*/}
                </View>

                <View>
                    <Text className="text-gray-900 font-[600] text-[16px] mt-7">Your Items</Text>
                </View>

                <View className="mt-6">
                    <FlatList data={restaurant?.dishes} renderItem={({item}) => (
                        <BasketDishItem basketDish={item} />
                    )} />
                </View>
            </View>
            <View className="border-b border-gray-300 my-6"/>

            <View className="mx-4 space-y-3">
                <View className="flex-row items-center justify-between">
                    <Text className="text-[14px]">Subtotal</Text>
                    <Text className="text-gray-800 font-[500]">${restaurant.dishes[0].price}</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-[14px]">Total</Text>
                    <Text className="text-gray-800 font-[500]">${restaurant.dishes[0].price}</Text>
                </View>
            </View>


            <TouchableOpacity activeOpacity={0.7} className="absolute bottom-10 right-1 left-1 flex-row items-center justify-center mx-4 bg-black py-4 rounded-sm">
                <Text className="text-white text-[15px] font-semibold">Next •</Text>
                <Text className="text-white mr-3">{" "}34.54 $</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Basket;
