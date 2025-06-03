import { useCallback, useEffect, useState } from "react";
import { Modal, Text } from "react-native";
import { Activity } from "../../models/toDoListSchema";
import { useUser } from "@realm/react";
import { realmContext } from "../../models/RealmContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { modal, ModalSchema } from "./modalToDoSchema";
import { AddButton, ButtonsView, CancelButton, CenteredView, ErrorText, ModalView, TextButtons, TextInputModal, TextModal } from "./styles";
import { Controller, useForm } from "react-hook-form";

interface ModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const { useRealm, useQuery } = realmContext;

export function ModalToDO({ modalVisible, setModalVisible }: ModalProps) {

    const realm = useRealm();
    const user = useUser();
    const activityQuery = useQuery(Activity);
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<modal>({
        resolver: zodResolver(ModalSchema),
        defaultValues: {
            texto: '',
        },
    });

    const addActivity = useCallback((data: modal) => {
        const currentActivityName = data.texto;
        const activity = realm.write(() => {
            return new Activity(realm, {
                name: currentActivityName,
                userId: user?.id,
            });
        });
        console.log("criado ", activity);
        setModalVisible(false);
        reset();
    }, [realm, user],
    );

    const cancelupdate = () => {
        setModalVisible(false);
        reset();
    }

    useEffect(() => {
        realm.subscriptions.update(mutableSubs => {
            mutableSubs.add(realm.objects(Activity));
        });
    }, [realm]);

    return (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
            <CenteredView>
                <ModalView style={{
                    shadowColor: "#fff",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <TextModal>Adicionar uma nova atividade</TextModal>
                    <Controller
                        name="texto"
                        control={control}
                        render={({ field, fieldState }) => (
                            <>
                                <TextInputModal
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder="Digite o nome da atividade"
                                    placeholderTextColor={"#B0B0B0"}
                                />
                                {fieldState.error ? <ErrorText>{fieldState.error.message}</ErrorText> : null}
                            </>
                        )}
                    />
                    <ButtonsView>
                        <CancelButton onPress={cancelupdate}>
                            <TextButtons>Cancelar</TextButtons>
                        </CancelButton>
                        <AddButton onPress={handleSubmit(addActivity)}>
                            <TextButtons>Confirmar</TextButtons>
                        </AddButton>
                    </ButtonsView>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}
