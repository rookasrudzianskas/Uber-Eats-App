import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import Restaurants from '../../assets/data/restaurants.json';
import {StatusBar} from "expo-status-bar";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import {useNavigation, useRoute} from "@react-navigation/native";
import {DataStore} from "aws-amplify";
import {Restaurant} from "../../models";

const RestaurantDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params?.id;
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        DataStore.query(Restaurant, id).then(setRestaurant);
    }, []);

    if(!restaurant) {
        return (
            <View className="items-center justify-center h-screen -mt-7">
                <Text className="text-xl mb-4 font-bold text-gray-900">Restaurant is loading...</Text>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
    // console.warn(id)
    return (
        <View className="relative bg-gray-100 h-screen">
            <StatusBar style="light" />
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute z-50 items-center justify-center top-10 left-4 bg-white w-10 h-10 rounded-full" activeOpacity={0.7}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                    <RestaurantHeader restaurant={restaurant} />
                )} data={restaurant.dishes} renderItem={({item}) => <DishListItem dish={item} />} />
            </View>
        </View>
    );
};

export default RestaurantDetails;
