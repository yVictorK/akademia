import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BackButton } from "@components/BackButton";
import Icon from '@images/icon45.svg';
import { HeaderYoutube, HeaderText, MainContainer, FilterButton, FilterContainer } from "./styles";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps, routes } from '../../types/navigation';

interface FilterOptionProps {
    label: string;
    active?: boolean;
    onPress: () => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({ label, active, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: active ? '#6366F1' : '#E5E7EB', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 8, margin: 5 }}>
            <Text style={{ color: active ? 'white' : 'black' }}>{label}</Text>
        </TouchableOpacity>
    );
};

export function FilterYoutubeVideos() {
    const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute<RouteProp<routes, 'FilterYoutubeVideos'>>();
    const {currentTitle} = route.params; 

    const handleSelectDuration = (duration: 'any'|'short' | 'medium' | 'long') => {
        setSelectedDuration(duration);
        navigate('YoutubeAulas', { duration , text: currentTitle }); 
    };


    return (
        <MainContainer>
            <HeaderYoutube>
                <BackButton />
                <HeaderText>Filtrar por</HeaderText>
                <Icon />
            </HeaderYoutube>
            <ScrollView style={{ padding: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: 'white' }}>Duração:</Text>
                <FilterContainer>
                    <FilterOption label="Qualquer" active={selectedDuration === 'any'} onPress={() => handleSelectDuration('any')} />
                    <FilterOption label="Menos de 5 minutos" active={selectedDuration === 'short'} onPress={() => handleSelectDuration('short')} />
                    <FilterOption label="5 - 20 minutos" active={selectedDuration === 'medium'} onPress={() => handleSelectDuration('medium')} />
                    <FilterOption label="Mais de 20 minutos" active={selectedDuration === 'long'} onPress={() => handleSelectDuration('long')} />
                </FilterContainer>
            </ScrollView>
        </MainContainer>
    );
}
