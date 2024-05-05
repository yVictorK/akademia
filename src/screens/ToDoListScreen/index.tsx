import { FlatList } from 'react-native';
import { ButtonAddActivity, HeaderContainer, ListView, MainContainer, TextAddActivity, TextToDoList } from "./styles";
import { Activity } from '../../models/toDoListSchema';
import { ToDoListBox } from '../../components/ToDoListBox';
import { ModalToDO } from '../../components/ModalToDo';
import { useEffect, useState } from 'react';
import { realmContext } from "../../models/RealmContext";
import { useUser } from '@realm/react';

const { useQuery, useRealm } = realmContext;

export function ToDoList() {
  const realm = useRealm();
  const user = useUser();
  const [modalVisible, setModalVisible] = useState(false);
  const userActivitys = realm.objects(Activity).filtered(`userId == "${user?.id}"`);

  return (
    <MainContainer>
      <TextToDoList>Lista de Afazeres</TextToDoList>
      <ListView>
        <FlatList
          data={userActivitys}
          keyExtractor={(item: Activity) => item._id.toString()}
          renderItem={({ item }: { item: Activity }) => <ToDoListBox props={item.name} />}
          showsVerticalScrollIndicator={false}
          numColumns={1}
        />
        <ButtonAddActivity onPress={() => setModalVisible(true)}>
          <TextAddActivity>Adicionar atividade</TextAddActivity>
        </ButtonAddActivity>
      </ListView>
      <ModalToDO modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </MainContainer>
  );
}

