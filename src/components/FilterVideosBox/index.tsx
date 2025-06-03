import { Text, TouchableOpacity } from "react-native";
import FilterIcon from '@images/filtragem.svg';
import Theme from '@themes/default';
import { NavigationProps } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";

interface FilterBoxProps {
    text?: string; 
}

export const FilterBox = ({ text = "Texto Padrão" }: FilterBoxProps) => {
    const { navigate } = useNavigation<NavigationProps>();

    const openFilter = () => {
        navigate('FilterYoutubeVideos', { currentTitle: text });
    };

    return (
        <TouchableOpacity style={{
            width: '100%',
            justifyContent: "space-between",
            alignItems: 'center',
            flexDirection: 'row',
            borderColor: Theme.COLORS.primary,
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
        }}
            onPress={openFilter}
        >
            <Text
                style={{
                    color: 'white',
                    marginLeft: 5,
                }}
            >Filtre por aqui</Text>
            <FilterIcon />
        </TouchableOpacity>
    );
};
