import { FlatList, Button } from 'react-native';
import { HeaderContainer, MainContainer, TextToDoList } from "./styles";
import { BackButton } from "../../components/BackButton";
import { newActivity } from '../../schema/toDoListSchema';
import { ToDoListBox } from '../../components/ToDoListBox';
import { ModalToDO } from '../../components/ModalToDo';
import { useEffect, useState } from 'react';


let realm = new Realm({ schema: [newActivity] });

export function ToDoList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activitiess, setActivities] = useState<newActivity[]>([]);

  useEffect(() => {
    function updateActivities() {
      const activities = realm.objects<newActivity>('Activity');
      setActivities(Array.from(activities));
    }

    updateActivities();

    const activities = realm.objects<newActivity>('Activity');
    activities.addListener(updateActivities);

    return () => {
      activities.removeListener(updateActivities);
    };
  }, []);

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
        data={activitiess}
        keyExtractor={(item: newActivity) => item.name}
        renderItem={({ item }: { item: newActivity }) => <ToDoListBox props={item.name} />}
      />
      <ModalToDO modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </MainContainer>
  );
}

