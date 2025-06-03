import React, { useState, useEffect } from 'react';
import { View, FlatList, Modal, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { HeaderSingIn } from "@components/SingInHeader";
import { MainContainer, NoticesButton, NoticesButtonText, TitleNotices } from "./style";
import { NoticeCard } from "@components/NoticeCard";
import { WebView } from 'react-native-webview';
import { realmContext } from "@models/RealmContext";
import { EditalSchema } from "@models/EditalSchema";
import { X } from 'phosphor-react-native';

const { useRealm, useQuery } = realmContext;


export function Notices() {
  const realm = useRealm();
  const editais = useQuery(EditalSchema);
  const [selectedButton, setSelectedButton] = useState<string>('UFAM');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleButtonPress = (category: string) => {
    setSelectedButton(category);
  };

  const handleNoticePress = (link: string) => {
    setSelectedLink(link);
    setModalVisible(true);
  };

  const filteredEditais = editais.filtered('category == $0', selectedButton);

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
        data={filteredEditais}
        keyExtractor={(item) => item._id.toHexString()}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <NoticeCard
            title={item.year?.toString()|| item.title}
            noticeName={item.title}
            onPress={() => handleNoticePress(item.link)}
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
        <View style={{ flex: 1, backgroundColor: '#241D26' }}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <X size={20} color='white' />
          </TouchableOpacity>
          {selectedLink && (
            <WebView
              source={{ uri: selectedLink }}
              style={{ flex: 1 }}
              startInLoadingState={true}
              accessibilityViewIsModal
              renderError={() => (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>Erro ao carregar o conteúdo.</Text>
                </View>
              )}
            />
          )}

        </View>
      </Modal>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },  
  closeButton: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
},
  closeButtonText: {
  color: '#fff',
  fontSize: 18,
},
});
