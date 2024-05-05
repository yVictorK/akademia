import { FlatList, Button } from 'react-native';
import { ButtonAddActivity, HeaderContainer, MainContainer, TextAddActivity, TextToDoList } from "./styles";
import { BackButton } from "../../components/BackButton";
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
      <HeaderContainer>
        <BackButton />
      </HeaderContainer>
      <TextToDoList>Lista de Afazeres</TextToDoList>
      <FlatList
        style={{
          height: 150,
        }}
        data={userActivitys}
        keyExtractor={(item: Activity) => item._id.toString()}
        renderItem={({ item }: { item: Activity }) => <ToDoListBox props={item.name} />}
      />
      <ModalToDO modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <ButtonAddActivity onPress={() => setModalVisible(true)}>
        <TextAddActivity>Adicionar atividade</TextAddActivity>
      </ButtonAddActivity>
    </MainContainer>
  );
}

