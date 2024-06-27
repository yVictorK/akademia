import React, { useState } from 'react';
import { View, FlatList, Modal, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { HeaderSingIn } from "@components/SingInHeader";
import { MainContainer, NoticesButton, NoticesButtonText, TitleNotices } from "./style";
import { NoticeCard } from "@components/NoticeCard";
import MatrizEnem from '@assets/Editais/export.json'; // Certifique-se de importar o arquivo JSON correto

interface EditalItem {
  title: string;
  editalName: string;
  json?: any;
}

const itensUEA: EditalItem[] = [
  { title: '2020', editalName: 'editalUEA_2020.pdf' },
  { title: '2021', editalName: 'editalUEA_2021.pdf' },
  { title: '2022', editalName: 'editalUEA_2022.pdf' },
  { title: '2023', editalName: 'editalUEA_2023.pdf' },
];

const itensUFAM: EditalItem[] = [
  { title: '2020', editalName: 'editalUFAM_2020.pdf' },
  { title: '2021', editalName: 'editalUFAM_2021.pdf' },
  { title: '2022', editalName: 'editalUFAM_2022.pdf' },
  { title: '2023', editalName: 'editalUFAM_2023.pdf' },
];

const itensENEM: EditalItem[] = [
  { title: 'ENEM', editalName: 'MatrizEnem.pdf', json: MatrizEnem },
];

// Importar todas as imagens manualmente
const imagePaths = [
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_1.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_2.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_3.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_4.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_5.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_6.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_7.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_8.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_9.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_10.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_11.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_12.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_13.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_14.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_15.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_16.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_17.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_18.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_19.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_20.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_21.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_22.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_23.png'),
  require('../../assets/Editais/MatrizEnemImages/a0068ebc_24.png')
];

export function Notices() {
  const [editais, setEditais] = useState<EditalItem[]>(itensUEA);
  const [selectedButton, setSelectedButton] = useState('UEA');
  const [modalVisible, setModalVisible] = useState(false);
  const [jsonContent, setJsonContent] = useState<any>(null);

  const handleButtonPress = (button: string) => {
    setSelectedButton(button);
    if (button === 'UEA') {
      setEditais(itensUEA);
    } else if (button === 'UFAM') {
      setEditais(itensUFAM);
    } else if (button === 'ENEM') {
      setEditais(itensENEM);
    }
  };

  const handleNoticePress = (json: any) => {
    if (json) {
      console.log('JSON Content:', json);  // Debug log
      setJsonContent(json);
      setModalVisible(true);
    } else {
      Alert.alert('Erro', 'Não foi possível carregar o conteúdo do edital.');
    }
  };

  return (
    <MainContainer>
      <HeaderSingIn />
      <TitleNotices>Editais</TitleNotices>
      <View style={{ flexDirection: 'row', gap: 15, alignSelf: 'center' }}>
        <NoticesButton
          style={{ backgroundColor: selectedButton === 'UEA' ? '#29A5DA' : '#FFF' }}
          onPress={() => handleButtonPress('UEA')}
        >
          <NoticesButtonText style={{ color: selectedButton === 'UEA' ? 'white' : 'black' }}>UEA</NoticesButtonText>
        </NoticesButton>
        <NoticesButton
          style={{ backgroundColor: selectedButton === 'UFAM' ? '#29A5DA' : '#FFF' }}
          onPress={() => handleButtonPress('UFAM')}
        >
          <NoticesButtonText style={{ color: selectedButton === 'UFAM' ? 'white' : 'black' }}>UFAM</NoticesButtonText>
        </NoticesButton>
        <NoticesButton
          style={{ backgroundColor: selectedButton === 'ENEM' ? '#29A5DA' : '#FFF' }}
          onPress={() => handleButtonPress('ENEM')}
        >
          <NoticesButtonText style={{ color: selectedButton === 'ENEM' ? 'white' : 'black' }}>ENEM</NoticesButtonText>
        </NoticesButton>
      </View>
      <FlatList
        data={editais}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 30 }}
        renderItem={({ item }) => (
          <NoticeCard
            title={item.title}
            noticeName={item.editalName}
            onPress={() => handleNoticePress(item.json)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {imagePaths.map((path, index) => (
              <Image
                key={index}
                source={path}
                style={styles.pageImage}
                resizeMode="contain"
                onError={() => console.log('Erro ao carregar imagem:', path)}  // Debug log para erros
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  pageImage: {
    width: '100%',
    height: 400,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#29A5DA',
    borderRadius: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
