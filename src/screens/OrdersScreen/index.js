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
                data={orders} renderItem={({item}) => (
                <OrderListItem order={item}/>
            )}/>
        </View>
    );
};

export default OrdersScreen;
