  import React from 'react';
  import Realm from 'realm';
  import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Picker } from "react-native";
  import { HeaderProfile, HeaderText, MainContainer } from "./styles";
  import { BackButton } from "@components/BackButton";
  import { Gear, IconContext } from "phosphor-react-native";
  import Icon from '@images/icon45.svg';
  import { realmContext } from "@models/RealmContext";
  import { BaralhoSchema } from "@models/baralhoSchema";
  import { useUser } from "@realm/react";
  import { useCallback, useEffect, useState } from "react";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { AddButton, ButtonsView, CancelButton, CenteredView, ErrorText, ModalView, TextButtons, TextInputModal, TextModal } from "./styles";
  import { Controller, useForm } from "react-hook-form";
  import { z } from 'zod';

  const { useRealm, useQuery } = realmContext;



  export const ModalSchema = z.object({
    texto: z.string()
      .min(1, 'Preencha os campos')
      .max(60, 'Texto muto grande, por favor digite um texto menor.')
  });

  export type modal = z.infer<typeof ModalSchema>;

  interface ModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export function ModalCreateFlashCard({ modalVisible, setModalVisible }: ModalProps) {
    const [titulo, setTitulo] = useState('');
    const [pergunta, setPergunta] = useState('');
    const [resposta, setResposta] = useState('');
    const [cronometro, setCronometro] = useState('');
    const [selectedBaralhoId, setSelectedBaralhoId] = useState('');

    const realm = useRealm();
    const user = useUser();

    const baralhosName = useQuery(BaralhoSchema).filtered('userId ==$0', user.id)

    const handleSave = () => {
    
      setModalVisible(false);
    };

    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true} style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }} >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', padding: 20, marginBottom: 10, }}>
              <View></View>
              <Text style={styles.title}>Criar flashcards</Text>
              <Icon />
            </View>
            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }} >Título</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome do FlashCard"
                placeholderTextColor='#dddddd'
                value={titulo}
                onChangeText={setTitulo}
              />
            </View>
            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }} >Pergunta</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a pergunta"
                placeholderTextColor='#dddddd'
                value={pergunta}
                onChangeText={setPergunta}
              />
            </View>
            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }} >Resposta</Text>
              <TextInput
                style={styles.input}
                placeholder="Resposta"
                placeholderTextColor='#dddddd'
                value={resposta}
                onChangeText={setResposta}
              />
            </View>
            <View style={{ width: '100%', gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PoppinsSemiBold' }} >Cronômetro</Text>
              <TextInput
                style={styles.input}
                placeholder="Cronômetro"
                placeholderTextColor='#dddddd'
                value={cronometro}
                onChangeText={setCronometro}
              />
            </View>






            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    }, [realm, user],
    );

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



  interface BaralhoProps {
    name: string,
  }

  interface RenderBaralhoProps {
    item: BaralhoProps,
    length: number,
  }

  function renderBaralho({ item, length }: RenderBaralhoProps) {
    return (
      <TouchableOpacity style={{ borderWidth: 1.5, borderColor: '#FFFFFF', borderRadius: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'PoppinsMedium' }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Text style={{ color: '#29A5DA', fontSize: 12, fontFamily: 'PoppinsMedium' }}>{length + ' cartas'}</Text>
          <Gear color='white' />
        </View>
      </TouchableOpacity>
    );
  }

  export function FlashCards() {
    const user = useUser();
    const baralhos = useQuery<BaralhoSchema>('baralho').filtered('userId == $0', user.id);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalFlashCardVisible, setModalFlashCardVisible] = useState(false);


    return (
      <MainContainer>
        <HeaderProfile>
          <BackButton />
          <HeaderText>Meus flashcards</HeaderText>
          <Icon />
        </HeaderProfile>
        <FlatList
          data={baralhos}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => renderBaralho({ item, length: item.cards?.length ?? 0, })}
          contentContainerStyle={{ padding: 16 }}
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
  });
