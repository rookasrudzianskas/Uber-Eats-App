import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs, {RootNavigator} from "./src/navigation";

LogBox.ignoreLogs(['SplashScreen.show']);

export default function App() {
    return (
        <NavigationContainer>
            <View className="h-screen">
                <HomeTabs />
                {/*<RootNavigator />*/}
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>

    );
}

