import { Image, Text, TouchableOpacity, View } from "react-native";
import { HeaderText, HeaderProfile, MainContainer } from "./styles";
import { BackButton } from "@components/BackButton";
import Icon from '@images/icon45.svg';
import { UserSchema } from "@models/userSchema";
import { useState } from "react";
import { realmContext } from "@models/RealmContext";
import { useApp, useUser } from "@realm/react";
import { SignOut, UserCircle } from "phosphor-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileRoutesType } from "@routes/profile.routes";

const { useQuery, useRealm } = realmContext;

export function Profile() {

    const app = useApp();
    const user = useUser();
    const userProfile = useQuery(UserSchema).filtered('userId == $0', user.id);
    const { navigate } = useNavigation<NavigationProp<ProfileRoutesType>>();

    function logOut() {
        app.currentUser?.logOut();
    }

    return (
        <MainContainer>
            <HeaderProfile>
                <View style={{ width: 30 }}></View>
                <HeaderText>Perfil</HeaderText>
                <Icon />
            </HeaderProfile>
            <View style={{ alignItems: 'center', gap: 10 }}>
                <Image
                    source={{ uri: userProfile[0].imageProfile }}
                    width={110}
                    height={110}
                    borderRadius={110}
                    style={{ borderWidth: 3, borderColor: '#29A5DA' }}
                />
                <Text style={{ fontSize: 30, fontFamily: 'PoppinsSemiBold', color: 'white' }} >{userProfile[0].name}</Text>
            </View>
            <TouchableOpacity onPress={() => navigate('editProfile')} style={{ flexDirection: 'row', backgroundColor: '#3A3D5C', gap: 15, borderRadius: 15, padding: 15, alignItems: 'center' }} >
                <UserCircle size={36} color="#e7e6e6" />
                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'PoppinsSemiBold' }} >Meus Dados</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut} style={{ flexDirection: 'row', backgroundColor: '#FB2E2E', gap: 15, borderRadius: 15, padding: 15, alignItems: 'center' }} >
                <SignOut size={36} color="#e7e6e6" />
                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'PoppinsSemiBold' }} >Sair da Conta</Text>
            </TouchableOpacity>
        </MainContainer>
    );
}
