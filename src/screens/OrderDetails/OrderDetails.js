import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import OrderDetailsHeader from "./index";
import BasketDishItem from "../../components/BasketDishItem";

const OrderDetails = () => {
    const restaurant = restaurants[0].dishes;
    return (
        <View>
            <FlatList
                ListHeaderComponent={() => (
                    <OrderDetailsHeader />
                )}
                showsVerticalScrollIndicator={false}
                data={restaurant} renderItem={({item}) => (
                <View className="mx-4">
                    <BasketDishItem basketDish={item} />
                </View>
            )} />
        </View>
    );
};

export default OrderDetails;
