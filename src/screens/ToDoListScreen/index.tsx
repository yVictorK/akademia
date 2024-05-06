import { Alert, FlatList } from 'react-native';
import { ButtonAddActivity, HeaderContainer, ListView, MainContainer, TextAddActivity, TextToDoList } from "./styles";
import { Activity } from '../../models/toDoListSchema';
import { ToDoListBox } from '../../components/ToDoListBox';
import { ModalToDO } from '../../components/ModalToDo';
import { useCallback, useEffect, useState } from 'react';
import { realmContext } from "../../models/RealmContext";
import { useUser } from '@realm/react';
import { ModalDeleteItem } from '../../components/ModalDeleteItem';
import { BSON } from 'realm';

const { useQuery, useRealm } = realmContext;

export function ToDoList() {
  const realm = useRealm();
  const user = useUser();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const userActivitys = realm.objects(Activity).filtered(`userId == "${user?.id}"`);
  const [selectedActivityId, setSelectedActivityId] = useState('');

  const toggleItemIsCompleted = useCallback(
    (itemId : BSON.ObjectId) => {
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
    <MainContainer>
      <TextToDoList>Lista de Afazeres</TextToDoList>
      <ListView>
        <FlatList
          data={userActivitys}
          keyExtractor={(item: Activity) => item._id.toString()}
          renderItem={({ item }: { item: Activity }) => (
            <ToDoListBox
              props={item.name}
              getItemId={() => {
                setSelectedActivityId(item._id.toString());
                setModalDeleteVisible(true);
              }}
              itemID={item._id}
              itemState={item.isComplete}
              toggleItemIsCompleted={() => toggleItemIsCompleted(item._id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={1}
        />
        <ButtonAddActivity onPress={() => setModalVisible(true)}>
          <TextAddActivity>Adicionar atividade</TextAddActivity>
        </ButtonAddActivity>
      </ListView>
      <ModalToDO modalVisible={modalVisible} setModalVisible={setModalVisible} />
      {selectedActivityId && selectedActivityId.length === 24 ? <ModalDeleteItem modalDeleteVisible={modalDeleteVisible} setModalDeleteVisible={setModalDeleteVisible} activityId={new BSON.ObjectId(selectedActivityId)} /> : null}
    </MainContainer>
  );
}

