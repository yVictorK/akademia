import { useCallback, useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { Activity } from "../../models/toDoListSchema";
import { useQuery, useUser } from "@realm/react";
import { realmContext } from "../../models/RealmContext";

interface ModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const { useRealm } = realmContext;

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
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Adicionar uma nova atividade</Text>
                    <TextInput
                        value={ActivityName}
                        onChangeText={(text) => {
                            console.log(text);
                            setActivityName(text);
                        }}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                        <Button title="Confirmar" onPress={addActivity} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '70%',
        maxHeight: 300
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }
});
