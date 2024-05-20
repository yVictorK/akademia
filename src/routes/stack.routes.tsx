import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
import { YoutubeAulas } from '../screens/YoutubeAulas';

const Stack = createNativeStackNavigator();

export function StackRoute() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TabNavigator' component={TabRoutes} />
            <Stack.Screen name="YoutubeAulas" component={YoutubeAulas} options={{ animation:'none', statusBarAnimation: 'slide' }} />
        </Stack.Navigator>
    );
}