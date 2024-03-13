import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/Main";
import { TabRoutes } from "./tab.routes";

const Stack = createNativeStackNavigator();

export function StackRoute() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TabNavigator' component={TabRoutes} />
        </Stack.Navigator>
    );
}