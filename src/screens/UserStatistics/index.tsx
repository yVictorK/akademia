import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import { HeaderProfile, HeaderText, MainContainer } from "./styles";
import { BackButton } from "@components/BackButton";
import Icon from '@images/icon45.svg';
import { CaretDown } from "phosphor-react-native";
import { realmContext } from "@models/RealmContext";
import { UserSchema } from "@models/userSchema";
import { useUser } from "@realm/react";
import { BarChart } from 'react-native-chart-kit';

const { useQuery } = realmContext;
const screenWidth = Dimensions.get("window").width;

export function UserStatistics() {
    const user = useUser();
    const userData = useQuery(UserSchema).filtered("userId == $0", user.id)[0];

    const data = {
        labels: ["Acertos", "Erros", "Total"],
        datasets: [
            {
                data: [
                    userData.correctAnswers || 0,
                    userData.wrongAnswers || 0,
                    userData.totalQuestions || 0
                ],
                colors: [
                    (opacity = 1) => `rgba(41, 165, 218, ${opacity})`, 
                    (opacity = 1) => `rgba(41, 165, 218, ${opacity})`, 
                    (opacity = 1) => `rgba(28, 189, 121, ${opacity})` 
                ]
            }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: '#241D26',
        backgroundGradientTo: '#241D26',
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

        useShadowColorFromDataset: false,
        decimalPlaces: 0,
        propsForLabels: {
            fontSize: 14,
            fill: "white"
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#241D26' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <MainContainer>
                    <HeaderProfile>
                        <BackButton />
                        <Icon />
                    </HeaderProfile>
                    <HeaderText>Suas Estatísticas</HeaderText>
                    <View style={{ backgroundColor: '#3A3D5C', borderRadius: 16, marginVertical: 8 }}>
                        <BarChart
                            style={{
                                borderRadius: 16,
                            }}
                            data={data}
                            width={screenWidth - 32}
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix=""
                            chartConfig={chartConfig}
                            fromZero={true}
                            showBarTops={false}
                            flatColor={true}
                            withCustomBarColorFromData
                        />
                    </View>
                    <View style={{ backgroundColor: '#3A3D5C', padding: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 5, gap: 5 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemiBold', color: 'white' }}>Esta Semana</Text>
                            <CaretDown color="white" size={16} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, color: 'white' }}>Você acertou {userData.correctAnswers} {userData.correctAnswers > 1 ? 'Flashcards' : 'Flashcard'}  </Text>
                        <Text style={{ fontSize: 16, color: 'white' }}>Você errou {userData.wrongAnswers} {userData.wrongAnswers > 1 ? 'Flashcards' : 'Flashcard'}  </Text>
                        <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemiBold', color: 'white', marginTop: 5 }}>Total</Text>
                        <Text style={{ fontSize: 16, color: 'white' }}>Você fez {userData.totalQuestions} Flashcards! </Text>
                    </View>
                </MainContainer>
            </ScrollView>
        </SafeAreaView>
    );
}
