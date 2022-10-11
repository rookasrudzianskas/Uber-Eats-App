import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Restaurants from "../../assets/data/restaurants.json";
import RestaurantItem from "../../components/RestaurantItem";

const HomeScreen = () => {
    return (
        <View className="mx-4">
            <FlatList data={Restaurants} showsVerticalScrollIndicator={false} renderItem={({item}) => <RestaurantItem restaurant={item} />} keyExtractor={(item) => item.id} />
        </View>
    );
};

export default HomeScreen;
