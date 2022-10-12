import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./src/navigation";

LogBox.ignoreLogs(['SplashScreen.show']);
LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop.']);

export default function App() {
    return (
        <NavigationContainer>
            <View className="h-screen">
                {/*<HomeTabs />*/}
                <RootNavigator />
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>

    );
}

