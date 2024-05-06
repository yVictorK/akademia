import { CardContainer, CardImage, TextCard } from "./styles";

export const CardYoutube = ({ image, text }: { image: string, text: string }) => {
    return (
        <CardContainer>
            <CardImage
                source={{uri: image}}
            />
            <TextCard>{text}</TextCard>
        </CardContainer>
    );
}
