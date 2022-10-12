import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const DishListItem = ({dish}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} className="mx-4 space-y-2 border-b border-gray-300 py-5">
            <Text className="text-[17px] tracking-wide font-[600] text-gray-900">
                {dish?.name}
            </Text>
            <Text className="text-gray-600">{dish?.description}</Text>
            <Text className="text-[16px] text-gray-900 font-[6500]">${dish?.price}</Text>
        </TouchableOpacity>
    );
};

export default DishListItem;
