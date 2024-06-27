import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { SignUp } from "@screens/SingUp";
import { NavigationContainer } from "@react-navigation/native";
import { Welcome } from "@screens/Welcome";
import { StatusBar } from "expo-status-bar";

const StackAuth = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <StatusBar style='light' backgroundColor='#241D26' />
            <StackAuth.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <StackAuth.Screen name='Welcome' component={Welcome} />
                <StackAuth.Screen name='Login' component={Login} />
                <StackAuth.Screen name='SignUp' component={SignUp} />
            </StackAuth.Navigator>
        </NavigationContainer>
    );
}