import { useNavigation } from "@react-navigation/native";
import { CardContainer, CardImage, TextCard } from "./styles";
import { NavigationProps } from "../../types/navigation";

export const CardYoutube = ({ children, text, color }: { children: React.ReactNode, text: string, color: string }) => {
    const { navigate } = useNavigation<NavigationProps>();

    function open() {
        navigate('YoutubeAulas', { text });
    }
    
    return (
       
        <CardContainer onPress={open}>
            <CardImage color={color}>
                {children}
            </CardImage>
            <TextCard>{text}</TextCard>
        </CardContainer>
    );
}
  