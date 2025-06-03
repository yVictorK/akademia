import React, { useState } from 'react';
import { Text } from 'react-native';
import Seta from '../../assets/images/SetaMetodos.svg';
import { MethodContainer, TextContinainer, TextMethod, TextSubtitle, ViewSubtitle } from './style';

interface Props {
    title: string;
    content: React.ReactNode[];
}

const SubtitleContainer: React.FC<{ content: React.ReactNode[] }> = ({ content }) => {
    return (
        <ViewSubtitle>
            <Text>{content}</Text>
        </ViewSubtitle>
    );
}

const StudyMethodBox: React.FC<Props> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MethodContainer onPress={() => setIsOpen(!isOpen)}>
            <TextContinainer>
                <TextMethod>{title}</TextMethod>
                <Seta />
            </TextContinainer>
            {isOpen && <SubtitleContainer content={content} />}
        </MethodContainer>
    );
};

export default StudyMethodBox;
