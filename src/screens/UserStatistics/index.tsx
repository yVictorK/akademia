import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { HeaderProfile, HeaderText, MainContainer } from "./styles";
import { BackButton } from "@components/BackButton";
import Icon from '@images/icon45.svg';
import { CaretDown } from "phosphor-react-native";

export function UserStatistics() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <MainContainer>
                <HeaderProfile>
                    <View></View>
                    <Icon />
                </HeaderProfile>
                <HeaderText>Suas Estatíticas</HeaderText>
                <View style={{ backgroundColor: '#3A3D5C', padding: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 5, gap: 5 }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemiBold', color: 'white' }}>Esta Semana</Text>
                        <CaretDown color="white" size={16} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, color: 'white' }}>Você possui 0 flashcards pendentes</Text>
                    <Text style={{ fontSize: 16, color: 'white' }}>Você acertou 0 quertões  </Text>
                    <Text style={{ fontSize: 16, color: 'white' }}>Você errou 0 quertões </Text>
                    <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemiBold', color: 'white', marginTop: 5 }}>Total</Text>
                    <Text style={{ fontSize: 16, color: 'white' }}>Você fez 0 questões! </Text>
                </View>
            </MainContainer>
        </SafeAreaView>
    );
}