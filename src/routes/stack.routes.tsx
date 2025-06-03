import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
import { YoutubeAulas } from '@screens/YoutubeAulas';
import { FilterYoutubeVideos } from "@screens/FilterVideos";
import { RenderFlashCard } from "@screens/RenderFlashCards";

const Stack = createNativeStackNavigator();

export function StackRoute() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TabNavigator' component={TabRoutes} />
            <Stack.Screen name='FilterYoutubeVideos' component={FilterYoutubeVideos} options={{animation: 'simple_push'}} />
            <Stack.Screen name="YoutubeAulas" component={YoutubeAulas} options={{ animation:'none', statusBarAnimation: 'slide' }} />
            <Stack.Screen name="RenderFlashCard" component={RenderFlashCard} options={{ animation:'none', statusBarAnimation: 'slide' }} />
        </Stack.Navigator>
    );
}