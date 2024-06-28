import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Pressable, Alert } from 'react-native';
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { realmContext } from "@models/RealmContext";
import { useUser } from "@realm/react";
import { FlashCardSchema } from "@models/FlashCard";
import { BaralhoSchema } from "@models/baralhoSchema";
import { MainContainer, HeaderProfile } from "./styles";
import Icon from '@images/icon45.svg';
import { BackButton } from "@components/BackButton";
import { NavigationProps, routes } from "../../types/navigation";
import { SafeAreaView } from 'react-native-safe-area-context';
import Realm from 'realm';
import { userSchema } from '@screens/Login/signISchema';
import { UserSchema } from '@models/userSchema';

const { useQuery, useRealm } = realmContext;

type RenderFlashCardRouteProp = RouteProp<routes, 'RenderFlashCard'>;

interface IndexedFlashCard extends FlashCardSchema {
  originalIndex: number;
}

export function RenderFlashCard() {
  const user = useUser();
  const realm = useRealm();
  const route = useRoute<RenderFlashCardRouteProp>();
  const navigation = useNavigation<NavigationProps>();
  const { itemID } = route.params;

  const baralho = useQuery(BaralhoSchema).filtered("_id == $0", new Realm.BSON.ObjectId(itemID))[0];
  const userData = useQuery(UserSchema).filtered('userId == $0', user.id);

  const [flashcards, setFlashcards] = useState<IndexedFlashCard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [flipAnim] = useState(new Animated.Value(0));
  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (baralho && baralho.cards) {
      const shuffledCards = baralho.cards.map((card, index) => ({
        ...card.toJSON(),
        originalIndex: index,
      })).sort(() => Math.random() - 0.5);
      setFlashcards(shuffledCards as IndexedFlashCard[]);
    }
  }, [baralho]);

  useEffect(() => {
    if (flashcards[currentCardIndex]?.timer) {
      setTimer(flashcards[currentCardIndex].timer);
    } else {
      setTimer(undefined);
    }
  }, [currentCardIndex, flashcards]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer !== undefined && timer > 0 && !isFlipped) {
      interval = setInterval(() => {
        setTimer(prev => (prev !== undefined ? prev - 1 : undefined));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, isFlipped]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const flipCard = () => {
    if (!isFlipped) {
      if (showAnswer) {
        Animated.timing(flipAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(flipAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
      }
      setShowAnswer(!showAnswer);
      setIsFlipped(true);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    realm.write(() => {
      if (isCorrect) {
        userData[0].correctAnswers += 1;
        console.log('acertou');
      } else {
        userData[0].wrongAnswers += 1;
        console.log('errou');
      }
      userData[0].totalQuestions += 1;
      console.log('adicionado, pontuação: ', userData[0].totalQuestions );
    });

    handleNextCard();
  };

  const handleNextCard = () => {
    if (currentCardIndex + 1 >= flashcards.length) {
      Alert.alert('Parabéns!', 'Você concluiu todos os cards.', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } else {
      setShowAnswer(false);
      setIsFlipped(false);
      Animated.timing(flipAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  if (flashcards.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainContainer>
          <HeaderProfile>
            <BackButton />
            <Icon />
          </HeaderProfile>
          <Text style={styles.noFlashcardsText}>Nenhum flashcard encontrado.</Text>
        </MainContainer>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <MainContainer>
        <HeaderProfile>
          <BackButton />
          <Icon />
        </HeaderProfile>
        {timer !== undefined && (
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
        )}
        <Pressable onPress={flipCard} style={styles.cardContainer}>
          <Animated.View style={[styles.flipCard, { transform: [{ rotateY: frontInterpolate }] }]}>
            <Text style={styles.questionText}>{flashcards[currentCardIndex].pergunta}</Text>
          </Animated.View>
          <Animated.View style={[styles.flipCard, styles.flipCardBack, { transform: [{ rotateY: backInterpolate }] }]}>
            <Text style={styles.answerText}>{flashcards[currentCardIndex].resposta}</Text>
          </Animated.View>
        </Pressable>
        {showAnswer && (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => handleAnswer(false)} style={styles.buttonError}>
              <Text style={styles.buttonText}>Errou</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAnswer(true)} style={styles.button}>
              <Text style={styles.buttonText}>Acertou</Text>
            </TouchableOpacity>
          </View>
        )}
        {!showAnswer && (
          <Text style={{ fontSize: 14, fontFamily: 'PoppinsMedium', color: '#fff', textAlign: 'center' }}>Toque para virar</Text>
        )}
      </MainContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    margin: 20,
    perspective: 1000,
  },
  flipCard: {
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29A5DA',
    borderRadius: 10,
    position: 'absolute',
  },
  flipCardBack: {
    backgroundColor: '#29A5DA',
    position: 'absolute',
    top: 0,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'PoppinsSemiBold',
  },
  answerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'PoppinsSemiBold',
  },
  flipButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#29A5DA',
    borderRadius: 10,
  },
  flipButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-evenly'
  },
  buttonError: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#F25757',
    borderRadius: 10,
    minWidth: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#40B418',
    borderRadius: 10,
    minWidth: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
  },
  timerText: {
    marginTop: 20,
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
  },
  noFlashcardsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
});
