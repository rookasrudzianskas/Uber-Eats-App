import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import DishListItem from "../../components/DishListItem";
import OrderDetailsHeader from "./index";
import OrderListItem from "../../components/OrderListItem";

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
                <OrderListItem dish={item} />
            )} />
        </View>
    );
};

export default OrderDetails;
