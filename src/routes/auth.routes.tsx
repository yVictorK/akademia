import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { SignUp } from "@screens/SingUp";
import { NavigationContainer } from "@react-navigation/native";
import { Welcome } from "@screens/Welcome";

const StackAuth = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <StackAuth.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <StackAuth.Screen name='Welcome' component={Welcome} />
                <StackAuth.Screen name='Login' component={Login} />
                <StackAuth.Screen name='SignUp' component={SignUp} />
            </StackAuth.Navigator>
        </NavigationContainer>
    );
}