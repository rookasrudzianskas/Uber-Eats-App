import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const RestaurantCard = ({restaurant}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} className="mx-3 my-2 bg-gray-100 p-2 rounded">
            <Image className="w-full h-56" source={{uri: restaurant?.image}} />
            <View className="flex-row mt-2 justify-between">
                <View className="space-y-1">
                    <Text className="text-gray-900 font-[600] text-[18px]">{restaurant?.name}</Text>
                    <View className="flex-row items-center">
                        <Text className="text-gray-400 text-[15px]">{restaurant?.deliveryFee}</Text>
                        <Text className="text-gray-400 text-[15px]"> • </Text>
                        <Text className="text-gray-400 text-[15px]">{restaurant?.minDeliveryTime} - {restaurant?.maxDeliveryTime} min</Text>
                    </View>
                </View>
                <View className="bg-gray-200 rounded-full items-center justify-center h-8 w-8 m-2">
                    <Text className="font-[600] text-gray-700">{restaurant?.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;
