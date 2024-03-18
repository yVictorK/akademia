import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SingUp";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";

const StackAuth = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <StackAuth.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <StackAuth.Screen name='Home' component={Home} />
                <StackAuth.Screen name='Login' component={Login} />
                <StackAuth.Screen name='SignUp' component={SignUp} />
            </StackAuth.Navigator>
        </NavigationContainer>
    );
}