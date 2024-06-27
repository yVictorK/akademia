import React, { useCallback, useEffect, useState } from 'react';
import Realm from 'realm';
import { FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { HeaderProfile, HeaderText, MainContainer } from "./styles";
import { BackButton } from "@components/BackButton";
import { Gear } from "phosphor-react-native";
import Icon from '@images/icon45.svg';
import { realmContext } from "@models/RealmContext";
import { BaralhoSchema } from "@models/baralhoSchema";
import { FlashCardSchema } from "@models/FlashCard";
import { useUser } from "@realm/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddButton, ButtonsView, CancelButton, CenteredView, ErrorText, ModalView, TextButtons, TextInputModal, TextModal } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { z } from 'zod';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { routes } from '../../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const { useRealm, useQuery } = realmContext;

const ModalSchema = z.object({
  texto: z.string()
    .min(1, 'Preencha os campos')
    .max(60, 'Texto muito grande, por favor digite um texto menor.')
});

export type modal = z.infer<typeof ModalSchema>;

const FlashCardSchemaValidation = z.object({
  titulo: z.string()
    .min(1, 'Título é obrigatório')
    .max(60, 'Título muito grande, por favor digite um título menor.'),
  pergunta: z.string()
    .min(1, 'Pergunta é obrigatória')
    .max(100, 'Pergunta muito grande, por favor digite uma pergunta menor.'),
  resposta: z.string()
    .min(1, 'Resposta é obrigatória')
    .max(100, 'Resposta muito grande, por favor digite uma resposta menor.'),
  selectedBaralhoId: z.string().nonempty('Selecione um baralho'),
  selectedCronometro: z.string(),
});

type FlashCardForm = z.infer<typeof FlashCardSchemaValidation>;

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalCreateFlashCard({ modalVisible, setModalVisible }: ModalProps) {
  const realm = useRealm();
  const user = useUser();
  const baralhos = useQuery(BaralhoSchema).filtered('userId == $0', user.id);

  const { control, handleSubmit, setError, setValue, formState: { errors } } = useForm<FlashCardForm>({
    resolver: zodResolver(FlashCardSchemaValidation),
    defaultValues: {
      titulo: '',
      pergunta: '',
      resposta: '',
      selectedBaralhoId: '',
      selectedCronometro: 'Desabilitado',
    },
  });

  const handleSave = (data: FlashCardForm) => {
    if (baralhos.length > 0) {
      realm.write(() => {
        const baralho = realm.objectForPrimaryKey(BaralhoSchema, new Realm.BSON.ObjectId(data.selectedBaralhoId));
        if (baralho) {
          const novoFlashCard = {
            name: data.titulo,
            pergunta: data.pergunta,
            resposta: data.resposta,
            timer: data.selectedCronometro === 'Desabilitado' ? undefined : parseInt(data.selectedCronometro) * 60,
          };
          baralho.cards?.push(novoFlashCard as FlashCardSchema);
        }
      });
      setModalVisible(false);
    }
  };

  const noBaralhos = baralhos.length === 0;

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <ScrollView>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', padding: 20, marginBottom: 10 }}>
              <View></View>
              <Text style={styles.title}>Criar flashcards</Text>
              <Icon />
            </View>

            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }}>Selecionar Baralho</Text>
              <View style={styles.pickerContainer} >
                <Controller
                  control={control}
                  name="selectedBaralhoId"
                  render={({ field: { onChange, value } }) => (
                    <Picker
                      selectedValue={value}
                      style={styles.picker}
                      onValueChange={onChange}
                      enabled={!noBaralhos}
                    >
                      <Picker.Item label={noBaralhos ? "Nenhum baralho criado" : "Selecione um baralho"} value="" />
                      {!noBaralhos && baralhos.map(baralho => (
                        <Picker.Item key={baralho._id.toString()} label={baralho.name} value={baralho._id.toString()} />
                      ))}
                    </Picker>
                  )}
                />
              </View>
            </View>

            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }}>Título</Text>
              <Controller
                control={control}
                name="titulo"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Nome do FlashCard"
                    placeholderTextColor='#dddddd'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.titulo && <Text style={styles.errorText}>{errors.titulo.message}</Text>}
            </View>

            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }}>Pergunta</Text>
              <Controller
                control={control}
                name="pergunta"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Digite a pergunta"
                    placeholderTextColor='#dddddd'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.pergunta && <Text style={styles.errorText}>{errors.pergunta.message}</Text>}
            </View>

            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }}>Resposta</Text>
              <Controller
                control={control}
                name="resposta"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Resposta"
                    placeholderTextColor='#dddddd'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.resposta && <Text style={styles.errorText}>{errors.resposta.message}</Text>}
            </View>

            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }}>Cronômetro</Text>
              <View style={styles.pickerContainer} >
                <Controller
                  control={control}
                  name="selectedCronometro"
                  render={({ field: { onChange, value } }) => (
                    <Picker
                      selectedValue={value}
                      style={styles.picker}
                      onValueChange={onChange}
                    >
                      <Picker.Item label="Desabilitado" value="Desabilitado" />
                      <Picker.Item label="1 minuto" value="1" />
                      <Picker.Item label="2 minutos" value="2" />
                      <Picker.Item label="3 minutos" value="3" />
                    </Picker>
                  )}
                />
              </View>
            </View>

            <TouchableOpacity
              style={[styles.saveButton, noBaralhos && styles.disabledButton]}
              onPress={handleSubmit(handleSave)}
              disabled={noBaralhos}
            >
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

export function ModalAddBaralho({ modalVisible, setModalVisible }: ModalProps) {
  const realm = useRealm();
  const user = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<modal>({
    resolver: zodResolver(ModalSchema),
    defaultValues: {
      texto: '',
    },
  });

  const addActivity = useCallback((data: modal) => {
    const currentActivityName = data.texto;
    const baralho = realm.write(() => {
      return new BaralhoSchema(realm, {
        name: currentActivityName,
        userId: user?.id,
      });
    });
    console.log("criado ", baralho);
    setModalVisible(false);
    reset();
  }, [realm, user]);

  const cancelupdate = () => {
    setModalVisible(false);
    reset();
  }

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(BaralhoSchema));
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
          <TextModal>Nome do baralho:</TextModal>
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
              <TextButtons>Voltar</TextButtons>
            </CancelButton>
            <AddButton onPress={handleSubmit(addActivity)}>
              <TextButtons>Criar</TextButtons>
            </AddButton>
          </ButtonsView>
        </ModalView>
      </CenteredView>
    </Modal>
  );
}

const EditBaralhoSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(60, 'Nome muito grande, por favor digite um nome menor.'),
});

type EditBaralhoForm = z.infer<typeof EditBaralhoSchema>;

interface RenderBaralhoProps {
  item: BaralhoSchema;
  length: number;
}

function RenderBaralho({ item, length }: RenderBaralhoProps) {
  const navigation = useNavigation<NavigationProp<routes>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const realm = useRealm();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<EditBaralhoForm>({
    resolver: zodResolver(EditBaralhoSchema),
    defaultValues: {
      name: item.name,
    },
  });

  const handleEdit = (data: EditBaralhoForm) => {
    realm.write(() => {
      item.name = data.name;
    });
    setEditModalVisible(false);
  };

  const handleDelete = () => {
    realm.write(() => {
      if (item.isValid()) {
        const flashcards = item.cards;
        if (flashcards && flashcards.isValid()) {
          realm.delete(flashcards);
        }
        realm.delete(item);
      }
    });
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('RenderFlashCard', { itemID: item._id.toString() })} style={{ borderWidth: 1.5, borderColor: '#FFFFFF', borderRadius: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'PoppinsMedium' }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Text style={{ color: '#29A5DA', fontSize: 12, fontFamily: 'PoppinsMedium' }}>{length + ' cartas'}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Gear color='white' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <CenteredView>
          <ModalView style={styles.modalView}>
            <TextModal>O que você deseja fazer?</TextModal>
            <ButtonsView>
              <AddButton onPress={() => { setModalVisible(false); setEditModalVisible(true); }}>
                <TextButtons>Editar</TextButtons>
              </AddButton>
              <CancelButton onPress={handleDelete}>
                <TextButtons>Excluir</TextButtons>
              </CancelButton>
              <CancelButton onPress={() => setModalVisible(false)}>
                <TextButtons>Cancelar</TextButtons>
              </CancelButton>
            </ButtonsView>
          </ModalView>
        </CenteredView>
      </Modal>

      <Modal visible={editModalVisible} animationType="slide" transparent={true}>
        <CenteredView>
          <ModalView style={styles.modalView}>
            <TextModal>Editar baralho:</TextModal>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextInputModal
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholder="Digite o nome do baralho"
                    placeholderTextColor={"#B0B0B0"}
                  />
                  {fieldState.error ? <ErrorText>{fieldState.error.message}</ErrorText> : null}
                </>
              )}
            />
            <ButtonsView>
              <CancelButton onPress={() => { setEditModalVisible(false); reset(); }}>
                <TextButtons>Voltar</TextButtons>
              </CancelButton>
              <AddButton onPress={handleSubmit(handleEdit)}>
                <TextButtons>Salvar</TextButtons>
              </AddButton>
            </ButtonsView>
          </ModalView>
        </CenteredView>
      </Modal>
    </>
  );
}

export function FlashCards() {
  const user = useUser();
  const realm = useRealm();
  const baralhos = useQuery(BaralhoSchema).filtered('userId == $0', user.id);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalFlashCardVisible, setModalFlashCardVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        <HeaderProfile>
          <BackButton />
          <HeaderText>Meus flashcards</HeaderText>
          <Icon />
        </HeaderProfile>
        <FlatList
          data={baralhos}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <RenderBaralho item={item} length={item.cards?.length ?? 0} />}
          contentContainerStyle={{ padding: 16, paddingBottom: 100, }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          ListFooterComponent={
            <View style={{ gap: 15 }}>
              <TouchableOpacity onPress={() => setModalVisible(true)} style={{ backgroundColor: '#29A5DA', borderRadius: 15, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 15, marginHorizontal: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'PoppinsSemiBold' }}>Criar baralho</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalFlashCardVisible(true)} style={{ backgroundColor: '#29A5DA', borderRadius: 15, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 15, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'PoppinsSemiBold' }}>Criar flashcards</Text>
              </TouchableOpacity>
            </View>
          }
        />
        <ModalAddBaralho modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <ModalCreateFlashCard modalVisible={modalFlashCardVisible} setModalVisible={setModalFlashCardVisible} />
      </MainContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#241D26',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#241D26',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontSize: 25,
    fontFamily: 'PoppinsSemiBold',
    color: '#ffffff',
    marginBottom: 20,
    textAlignVertical: 'bottom',
  },
  input: {
    width: '100%',
    backgroundColor: '#3A3D5C',
    borderRadius: 15,
    padding: 20,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#7A7676',
    fontFamily: 'PoppinsSemiBold',
  },
  picker: {
    height: 50,
    color: 'white',
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#3A3D5C',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
    padding: 10,
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#29A5DA',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'PoppinsSemiBold',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#29A5DA',
    fontSize: 16,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  disabledButton: {
    backgroundColor: '#6c757d', // cor cinza meio azulado
  },
  modalView: {
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
