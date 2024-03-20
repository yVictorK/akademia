import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { newActivity} from "../../schema/toDoListSchema";
import { useUser } from '@realm/react';

const Realm = require("realm");

let realm = new Realm({ schema: [newActivity] });

interface ModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalToDO({ modalVisible, setModalVisible }: ModalProps) {
    const [newActivityName, setNewActivityName] = useState('');
    const user = useUser();
    const addActivity = () => {
        realm.write(() => {
          const newActivity = realm.create('Activity', {
            _id: Math.random().toString(),
            name: newActivityName,
            userId: user.id,
          });
        });
        setModalVisible(false);
        setNewActivityName('');
      };




    return (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Adicionar uma nova atividade</Text>
                    <TextInput value={newActivityName} onChangeText={setNewActivityName} />
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
