import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AntDesign, FontAwesome} from "@expo/vector-icons";

const RestaurantHeader = ({restaurant}) => {
    return (
        <>
            <Image className="w-[100%]" style={{aspectRatio: 9 / 5}} source={{uri: restaurant?.image}} />

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
            </>
    );
};

export default RestaurantHeader;
