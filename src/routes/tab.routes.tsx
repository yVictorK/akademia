import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from '../themes/default';
import Menu from '../assets/images/menu.svg';
import MenuFocused from '../assets/images/MenuIconFocused.svg';
import AdicionarIcon from '../assets/images/adicionarIcon.svg';
import AdicionarIconFocused from '../assets/images/AdicionarIconFocused.svg';
import CalendarioIcon from '../assets/images/calendarioIcon.svg';
import CalendarioIconFocused from '../assets/images/CalendarioIconFocused.svg';
import EstatisticaIcon from '../assets/images/estatisticaIcon.svg';
import EstatisticaIconFocused from '../assets/images/EstatisticaIconFocused.svg';
import Perfil from '../assets/images/perfil.svg';
import PerfilFocused from '../assets/images/UserIconFocused.svg';
import { MainScreen } from "../screens/Main";
import { ToDoList } from "../screens/ToDoListScreen";
import { Calendar } from "../screens/Calendar";
import { UserSenttings } from "../screens/UserSenttings";
import { UserStatistics } from "../screens/UserStatistics";
import { View } from "react-native";


const { Navigator, Screen } = createBottomTabNavigator();


export function TabRoutes() {

    return (
        <Navigator
            initialRouteName="MainScreenTab"
            backBehavior="none"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.COLORS.tabBar,
                    height: 70,
                    alignItems: "center",
                    position: "absolute",
                    left: 20,
                    right: 20,
                    bottom: 30,
                    borderRadius: 50,
                    paddingHorizontal: 40,
                    borderTopWidth: 0,
                    shadowOpacity: 0,
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Screen
                name="ToDoList"
                component={ToDoList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused && <View style={{ height: 3, backgroundColor: theme.COLORS.primary, width: 24, position: 'absolute', top: 10, borderRadius: 5, }} />}
                            {focused? <AdicionarIconFocused width={30} height={30} /> : <AdicionarIcon width={30} height={30} />}
                        </>
                    ),
                }}
            />
            <Screen
                name="calendarioTab"
                component={Calendar}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused && <View style={{ height: 3, backgroundColor: theme.COLORS.primary, width: 24, position: 'absolute', top: 10, borderRadius: 5, }} />}
                            {focused? <CalendarioIconFocused width={30} height={30}/> : <CalendarioIcon width={30} height={30}/>}
                        </>
                    ),
                }}
            />
            <Screen
                name="MainScreenTab"
                component={MainScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused && <View style={{ height: 3, backgroundColor: theme.COLORS.primary, width: 24, position: 'absolute', top: 10, borderRadius: 5, }} />}
                            {focused ? <MenuFocused width={30} height={30}/> : <Menu width={30} height={30}/>}
                        </>
                    ),
                }}
            />
            <Screen
                name="UserStatisticsTab"
                component={UserStatistics}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused && <View style={{ height: 3, backgroundColor: theme.COLORS.primary, width: 24, position: 'absolute', top: 10, borderRadius: 5, }} />}
                            {focused? <EstatisticaIconFocused width={30} height={30}/> : <EstatisticaIcon width={30} height={30}/>}
                        </>
                    ),
                }}
            />
            <Screen
                name="UserSenttingsTab"
                component={UserSenttings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused && <View style={{ height: 3, backgroundColor: theme.COLORS.primary, width: 24, position: 'absolute', top: 10, borderRadius: 5, }} />}
                            {focused? <PerfilFocused  width={30} height={30}/> : <Perfil  width={30} height={30}/>}
                        </>
                    ),
                }}
            />

        </Navigator>
    );
}