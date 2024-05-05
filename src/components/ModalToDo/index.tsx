import { useCallback, useEffect, useState } from "react";
import {Modal } from "react-native";
import { Activity } from "../../models/toDoListSchema";
import { useUser } from "@realm/react";
import { realmContext } from "../../models/RealmContext";
import { AddButton, ButtonsView, CancelButton, CenteredView, ModalView, TextButtons, TextInputModal, TextModal } from "./styles";

interface ModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const { useRealm, useQuery } = realmContext;

export function ModalToDO({ modalVisible, setModalVisible }: ModalProps) {

    const realm = useRealm();
    const user = useUser();
    const activityQuery = useQuery(Activity);

    const [ActivityName, setActivityName] = useState('');

    const addActivity = useCallback(() => {
        const currentActivityName = ActivityName;
        const activity = realm.write(() => {
            return new Activity(realm, {
                name: currentActivityName,
                userId: user?.id,
            });
        });
        console.log("criado ", activity);
        setModalVisible(false);
        setActivityName('');
    }, [realm, user, ActivityName],
    );

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
                    <TextInputModal
                        value={ActivityName}
                        onChangeText={(text) => {
                            setActivityName(text);
                        }}
                        placeholder="Digite o nome da atividade"
                        placeholderTextColor={"#B0B0B0"}
                    ></TextInputModal>
                    <ButtonsView>
                        <CancelButton onPress={() => setModalVisible(false)}>
                            <TextButtons>Cancelar</TextButtons>
                        </CancelButton>
                        <AddButton onPress={addActivity}>
                            <TextButtons>Confirmar</TextButtons>
                        </AddButton>
                    </ButtonsView>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}
