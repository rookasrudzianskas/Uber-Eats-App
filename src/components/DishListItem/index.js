import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const DishListItem = ({dish}) => {
    return (
        <View className="mx-4 space-y-2">
            <Text className="text-[17px] font-[600] text-gray-900">
                {dish?.name}
            </Text>
            <Text className="text-gray-600">{dish?.description}</Text>
            <Text className="text-[16px] text-gray-900 font-[6500]">${dish?.price}</Text>
        </View>
    );
};

export default DishListItem;
