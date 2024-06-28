import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEmailPasswordAuth } from "@realm/react";
import theme from "@themes/default";
import ControllerTextInput from "@components/ControllerInputText";

const userResetPasswordSchema = z.object({
    email: z.string({ required_error: 'Campo obrigatório' }).email('E-mail inválido').min(1, 'Campo obrigatório'),
});

type userResetPasswordType = z.infer<typeof userResetPasswordSchema>;

export function ForgotPassword() {
    const { control, handleSubmit, formState: { errors } } = useForm<userResetPasswordType>({
        resolver: zodResolver(userResetPasswordSchema),
    });

    const { sendResetPasswordEmail, result } = useEmailPasswordAuth();
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const resetPassword = async ({ email }: userResetPasswordType) => {
        setLoading(true);
        try {
            await sendResetPasswordEmail({ email });
            setEmailSent(true);
        } catch (error) {
            Alert.alert('Erro ao enviar email de redefinição de senha. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (emailSent) {
            if (result.success) {
                Alert.alert('Email de redefinição de senha enviado com sucesso!');
                setEmailSent(false);
            } else if (result.error) {
                if (result.error.message === 'Error: user not found') {
                    Alert.alert('Ops...Ocorreu um Erro: Usuário não encontrado');
                } else {
                    console.log('Ocorreu um erro', result.error.message);
                }
                setEmailSent(false);
            }
        }
    }, [result, emailSent]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Esqueceu a senha</Text>
                <View style={{ gap: 15, justifyContent: 'flex-start', marginTop: 30, }} >
                    <Text style={{ fontSize: 16, color: 'white', fontFamily: 'PoppinsMedium', textAlign: 'left' }} >E-Mail</Text>
                    <ControllerTextInput
                        control={control}
                        name='email'
                        placeholder='Digite seu E-mail'
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(resetPassword)}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? 'Enviando...' : 'Enviar código'}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#241D26',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 25,
    },
    logoCard: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoPicture: {
        aspectRatio: 1,
        borderRadius: 80,
        width: 210,
    },
    contentCard: {
        backgroundColor: theme.COLORS.background,
        paddingHorizontal: 30,
        alignItems: 'center',
        paddingVertical: 60,
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#29A5DA',
        paddingHorizontal: 70,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 25,
    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
