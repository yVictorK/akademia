import { NavigationContainer } from '@react-navigation/native';
import { StackRoute } from './stack.routes'
import { StatusBar } from 'expo-status-bar';

export function AppRoutes() {
    return (
        <NavigationContainer>
            <StatusBar style='light' backgroundColor='#241D26' />
            <StackRoute />
        </NavigationContainer>
    );
}