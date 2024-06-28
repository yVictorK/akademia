import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { SignUp } from "@screens/SingUp";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { Welcome } from "@screens/Welcome";
import { StatusBar } from "expo-status-bar";
import { ForgotPassword } from "@screens/ResetPassword/ForgotPassword";

const StackAuth = createNativeStackNavigator();

export type AuthRoutesType = {
    SignUp: undefined;
    Login: undefined;
    authentication: { handleNewUser: () => void };
    forgotpassword: undefined;
    resetpassword: { token: string; tokenId: string };
}

export function AuthRoutes() {

    const linking: LinkingOptions<AuthRoutesType> = {
        prefixes: ['com.akademia://', 'exp+akademia://'],
        config: {
            screens: {
                Login: 'authentication',
                forgotpassword: 'forgotpassword',
                resetpassword: 'resetPassword/:token/:tokenId',
            },
        },
    };

    return (
        <NavigationContainer linking={linking} >
            <StatusBar style='light' backgroundColor='#241D26' />
            <StackAuth.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <StackAuth.Screen name='Welcome' component={Welcome} />
                <StackAuth.Screen name='Login' component={Login} />
                <StackAuth.Screen name='SignUp' component={SignUp} />
                <StackAuth.Screen name='forgotpassword' component={ForgotPassword} />
            </StackAuth.Navigator>
        </NavigationContainer>
    );
}