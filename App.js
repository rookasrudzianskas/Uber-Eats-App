import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreLogs(['SplashScreen.show']);

export default function App() {
    return (
        <NavigationContainer>
            <View className="h-screen">
                {/*<HomeScreen />*/}
                {/*<RestaurantDetails />*/}
                {/*<DishDetailsScreen />*/}
                {/*<Basket />*/}
                {/*<OrdersScreen />*/}
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>

    );
}

