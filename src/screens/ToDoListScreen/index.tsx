import { Alert, FlatList, Modal } from 'react-native';
import { AddButton, ButtonAddActivity, ButtonsView, CancelButton, CenteredView, ErrorText, HeaderContainer, ListView, MainContainer, ModalView, TextAddActivity, TextButtons, TextInputModal, TextModal, TextToDoList } from "./styles";
import { Activity } from '@models/toDoListSchema';
import { ToDoListBox } from '@components/ToDoListBox';
import { ModalToDO } from '@components/ModalToDo';
import { useCallback, useEffect, useState } from 'react';
import { realmContext } from "@models/RealmContext";
import { useUser } from '@realm/react';
import { ModalDeleteItem } from '@components/ModalDeleteItem';
import { BSON } from 'realm';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ModalSchema = z.object({
  texto: z.string()
    .min(1, 'Preencha os campos')
    .max(60, 'Texto muto grande, por favor digite um texto menor.')
});

export type modal = z.infer<typeof ModalSchema>;

const { useQuery, useRealm } = realmContext;

interface ModalProps {
  modalEditVisible: boolean;
  setModalEditVisible: React.Dispatch<React.SetStateAction<boolean>>;
  activityId: BSON.ObjectId;
}

export function ModalEditItem({ modalEditVisible, setModalEditVisible, activityId }: ModalProps) {

  const realm = useRealm();
  const user = useUser();
  const activity = realm.objectForPrimaryKey(Activity, activityId);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<modal>({
    resolver: zodResolver(ModalSchema),
    defaultValues: {
      texto: '',
    },
  });

  useEffect(() => {
    if (activity) {
      setValue('texto', activity.name);
    }
  }, [Activity, modalEditVisible])


  function editActivity(data: modal) {
    if (activity) {
      if (activity.userId !== user?.id) {
        Alert.alert('Você não pode excluir esta atividade');
      }
      else {
        realm.write(() => {
          activity.name = data.texto;
          setModalEditVisible(false);
          reset();
        });
      }
    }
  }


  const cancelupdate = () => {
    setModalEditVisible(false);
    reset();
  }

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Activity));
    });
  }, [realm]);

  return (
    <Modal visible={modalEditVisible} animationType="slide" transparent={true}>
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
          <TextModal>Editar atividade</TextModal>
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
            <AddButton onPress={handleSubmit(editActivity)}>
              <TextButtons>Confirmar</TextButtons>
            </AddButton>
          </ButtonsView>
        </ModalView>
      </CenteredView>
    </Modal>
  );
}



export function ToDoList() {
  const realm = useRealm();
  const user = useUser();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const userActivitys = realm.objects(Activity).filtered(`userId == "${user?.id}"`);
  const [selectedActivityId, setSelectedActivityId] = useState('');


  const toggleItemIsCompleted = useCallback(
    (itemId: BSON.ObjectId) => {
      const item = realm.objectForPrimaryKey(Activity, itemId);
      if (item) {
        if (item.userId !== user?.id) {
          Alert.alert("Você não pode editar esta atividade");
        }
        else {
          realm.write(() => {
            item.isComplete = !item.isComplete;
          });
        }
      }
    },
    [realm, user],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <MainContainer>
        <TextToDoList>Lista de Afazeres</TextToDoList>
        <ListView>
          <FlatList
            data={userActivitys}
            keyExtractor={(item: Activity) => item._id.toString()}
            renderItem={({ item }: { item: Activity }) => (
              <ToDoListBox
                props={item.name}
                getItemIdToEdit={() => {
                  setSelectedActivityId(item._id.toString());
                  setModalEditVisible(true);
                }}
                getItemId={() => {
                  setSelectedActivityId(item._id.toString());
                  setModalDeleteVisible(true);
                }}
                itemID={item._id}
                itemState={item.isComplete}
                toggleItemIsCompleted={() => toggleItemIsCompleted(item._id)}
              />
            )}
            showsVerticalScrollIndicator={true}
            numColumns={1}
          />
          <ButtonAddActivity onPress={() => setModalVisible(true)}>
            <TextAddActivity>Adicionar atividade</TextAddActivity>
          </ButtonAddActivity>
        </ListView>
        <ModalToDO modalVisible={modalVisible} setModalVisible={setModalVisible} />
        {selectedActivityId && selectedActivityId.length === 24 ? <ModalDeleteItem modalDeleteVisible={modalDeleteVisible} setModalDeleteVisible={setModalDeleteVisible} activityId={new BSON.ObjectId(selectedActivityId)} /> : null}
        {selectedActivityId && selectedActivityId.length === 24 ? <ModalEditItem modalEditVisible={modalEditVisible} setModalEditVisible={setModalEditVisible} activityId={new BSON.ObjectId(selectedActivityId)} /> : null}

      </MainContainer>
    </SafeAreaView>
  );
}

