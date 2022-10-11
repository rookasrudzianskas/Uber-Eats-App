import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
    return (
        <View className="h-screen mt-10">
            <TouchableOpacity activeOpacity={0.7} className="mx-3 bg-gray-100 p-2 rounded">
                <Image className="w-full h-56" source={{uri: 'https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Uber%20Eats-grocery%20delivery-bag%20closeup.png?itok=rwDPx_XH'}} />
                <View className="flex-row mt-2 justify-between">
                    <View className="space-y-1">
                        <Text className="text-gray-900 font-[600] text-[18px]">Brother Burgers</Text>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-[15px]">1.4</Text>
                            <Text className="text-gray-400 text-[15px]">•</Text>
                            <Text className="text-gray-400 text-[15px]">20 - 30 min</Text>
                        </View>
                    </View>
                    <View className="bg-gray-200 rounded-full items-center justify-center h-8 w-8 m-2">
                        <Text className="font-[600] text-gray-700">4.3</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

