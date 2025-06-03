import { useCallback, useEffect, useState } from "react";
import { Alert, Modal, Text } from "react-native";
import { Activity } from "../../models/toDoListSchema";
import { useUser } from "@realm/react";
import { realmContext } from "../../models/RealmContext";
import { AddButton, ButtonsView, CancelButton, CenteredView, ErrorText, ModalView, TextButtons, TextModal } from "./styles";
import { BSON } from "realm";



interface ModalProps {
    modalDeleteVisible: boolean;
    setModalDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>;
    activityId: BSON.ObjectId;
}

const { useRealm, useQuery } = realmContext;

export function ModalDeleteItem({ modalDeleteVisible, setModalDeleteVisible, activityId }: ModalProps) {

    const realm = useRealm();
    const user = useUser();
    const activityQuery = useQuery(Activity);

    const deleteItem = useCallback(
        () => {
            const item = realm.objectForPrimaryKey(Activity, activityId);
            if (item) {
                if (item.userId !== user?.id) {
                    Alert.alert('Você não pode excluir esta atividade');
                }
                else {
                    realm.write(() => {
                        realm.delete(item);
                        setModalDeleteVisible(false);
                    });
                }
            }
        },
        [realm, user, activityId],
    );

    return (
        <Modal visible={modalDeleteVisible} animationType="slide" transparent={true}>
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
                    <TextModal>Deseja realmente excluir esta atividade?</TextModal>
                    <ButtonsView>
                        <CancelButton onPress={() => setModalDeleteVisible(false)}>
                            <TextButtons>Cancelar</TextButtons>
                        </CancelButton>
                        <AddButton onPress={deleteItem}>
                            <TextButtons>Confirmar</TextButtons>
                        </AddButton>
                    </ButtonsView>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}
