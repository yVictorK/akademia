import { NavigationContainer } from '@react-navigation/native';
import { StackRoute } from './stack.routes'

export function AppRoutes() {
    return (
        <NavigationContainer>
            <StackRoute />
        </NavigationContainer>
    );
}