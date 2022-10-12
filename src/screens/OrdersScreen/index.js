import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import OrderListItem from "../../components/OrderListItem";
import orders from '../../assets/data/orders.json';
import BasketDishItem from "../../components/BasketDishItem";
import OrderDetailsHeader from "../OrderDetails";
import restaurants from "../../assets/data/restaurants.json";


const OrdersScreen = () => {
    const restaurant = restaurants[0].dishes;

    return (
        <View>
            <FlatList
                ListHeaderComponent={() => (
                    <OrderDetailsHeader />
                )}
                data={restaurant} renderItem={({item}) => (
                    <View className="mx-4 border-b border-gray-300 py-2">
                        <BasketDishItem basketDish={item}/>
                    </View>
            )}/>
        </View>
    );
};

export default OrdersScreen;
