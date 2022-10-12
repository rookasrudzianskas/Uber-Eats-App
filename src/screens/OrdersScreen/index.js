import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import OrderListItem from "../../components/OrderListItem";
import orders from '../../assets/data/orders.json';
const OrdersScreen = () => {
    return (
        <View>
            <View className="flex-row justify-center mt-[50px]">
                <Text className="text-gray-900 font-bold text-2xl">Your orders</Text>
            </View>

            <View>
                <OrderListItem />
            </View>
        </View>
    );
};

export default OrdersScreen;
