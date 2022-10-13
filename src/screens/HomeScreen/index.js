import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Restaurants from "../../assets/data/restaurants.json";
import RestaurantItem from "../../components/RestaurantItem";

const HomeScreen = () => {
    const [restaurants, setRestaurants] = useState([]);

    return (
        <View className="mx-4">
            <FlatList
                keyExtractor={(item) => item.id}
                data={restaurants}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <RestaurantItem restaurant={item} />}
            />
        </View>
    );
};

export default HomeScreen;
