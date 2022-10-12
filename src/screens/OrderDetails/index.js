import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import orders from '../../assets/data/orders.json';
import {FontAwesome} from "@expo/vector-icons";

const OrderDetails = () => {
    const order = orders[0];
    return (
        <View>
            <>
                <Image className="w-[100%]" style={{aspectRatio: 9 / 7}} source={{uri: order?.Restaurant?.image}} />

                <View className="mx-4 mt-5">
                    <Text className="text-3xl font-[600] text-gray-900">{order?.Restaurant?.name}</Text>
                    <View className="flex-row items-center space-x-1 mt-1">
                        <Text className="text-gray-500 text-[15px]"><Text className="font-[600]">{order?.status}</Text></Text>
                        <Text className="text-gray-500 text-[15px]">•</Text>
                        <Text className="text-gray-500 text-[15px]">{order?.Restaurant?.createdAt}</Text>
                    </View>
                </View>
                <View>
                    <Text className="text-2xl font-[600] text-gray-900 mx-4 mt-3">Your Order</Text>
                </View>
            </>
        </View>
    );
};

export default OrderDetails;
