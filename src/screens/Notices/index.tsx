import { HeaderSingIn } from "@components/SingInHeader";
import { MainContainer, NoticesButton, NoticesButtonText, TitleNotices } from "./style";
import { FlatList, Text, Touchable, TouchableOpacity, View } from "react-native";
import { NoticeCard } from "@components/NoticeCard";
import { useState } from "react";

const itensUEA = [
  {
    title: '2020',
    editalName: 'editalUEA_2020.pdf'
  },
  {
    title: '2021',
    editalName: 'editalUEA_2021.pdf'
  },
  {
    title: '2022',
    editalName: 'editalUEA_2022.pdf'
  },
  {
    title: '2023',
    editalName: 'editalUEA_2023.pdf'
  },
]

const itensUFAM = [
  {
    title: '2020',
    editalName: 'editalUFAM_2020.pdf'
  },
  {
    title: '2021',
    editalName: 'editalUFAM_2021.pdf'
  },
  {
    title: '2022',
    editalName: 'editalUFAM_2022.pdf'
  },
  {
    title: '2023',
    editalName: 'editalUFAM_2023.pdf'
  },
]

const itensENEM = [
  {
    title: 'ENEM',
    editalName: 'editalEnem.pdf'
  },

]

export function Notices() {

  const [editais, setEditais] = useState(itensUEA);
  const [selectedButton, setSelectedButton] = useState('UEA');

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

  return (
    <MainContainer>
      <HeaderSingIn />
      <TitleNotices>Editais</TitleNotices>
      <View style={{ flexDirection: 'row', gap: 15, alignSelf: 'center' }}>
        <NoticesButton
          style={{
            backgroundColor: selectedButton === 'UEA' ? '#29A5DA' : '#FFF',
          }}
          onPress={() => handleButtonPress('UEA')}
        >
          <NoticesButtonText style={{ color: selectedButton === 'UEA' ? 'white' : 'black' }}>UEA</NoticesButtonText>
        </NoticesButton>
        <NoticesButton
          style={{
            backgroundColor: selectedButton === 'UFAM' ? '#29A5DA' : '#FFF',
          }}
          onPress={() => handleButtonPress('UFAM')}
        >
          <NoticesButtonText style={{ color: selectedButton === 'UFAM' ? 'white' : 'black' }}>UFAM</NoticesButtonText>
        </NoticesButton>
        <NoticesButton
          style={{
            backgroundColor: selectedButton === 'ENEM' ? '#29A5DA' : '#FFF',
          }}
          onPress={() => handleButtonPress('ENEM')}
        >
          <NoticesButtonText style={{ color: selectedButton === 'ENEM' ? 'white' : 'black' }}>ENEM</NoticesButtonText>
        </NoticesButton>
      </View>
      <FlatList
        data={editais}
        contentContainerStyle={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
        renderItem={({ item, index }) => (
          <NoticeCard title={item.title} noticeName={item.editalName} />
        )
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </MainContainer>
  );
}
