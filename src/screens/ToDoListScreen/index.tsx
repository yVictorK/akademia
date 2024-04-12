import { FlatList, Button } from 'react-native';
import { HeaderContainer, MainContainer, TextToDoList } from "./styles";
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
      <Button title="Adicionar nova atividade" onPress={() => setModalVisible(true)} />
      <FlatList
        style={{
          height: 'auto',
        }}
        data={userActivitys}
        keyExtractor={(item: Activity) => item._id.toString()}
        renderItem={({ item }: { item: Activity }) => <ToDoListBox props={item.name} />}
      />
      <ModalToDO modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </MainContainer>
  );
}

