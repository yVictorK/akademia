
import { View } from "react-native";
import { CardContainer, CardImage, SubtitleCard, TextCard, TextView } from "./styles";

export const CardAulas = ({ image, text }: { image: string, text: string }) => {

    return (
        <CardContainer>
            <CardImage
                source={{ uri: image }}
            />
            <TextView >
                <TextCard>{text}</TextCard>
                <SubtitleCard>Descrição do vídeo</SubtitleCard>
            </TextView>
        </CardContainer>
    );
}
