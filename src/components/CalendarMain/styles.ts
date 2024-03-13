import styled from "styled-components/native";


export const  CalendarView = styled.View`
    background-color: ${({theme}) => theme.COLORS.inputBackground };
    border-radius: 15px;
    padding:10px;
    gap: 5px;
    align-items: flex-start;
    margin-top: 20px;
`;

export const  DaysView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

export const TextCalendar = styled.Text`
    font-family: ${({theme}) => theme.FONTS.contents};
    font-size: ${({theme}) => theme.FONTSIZES.medium};
    color: ${({theme}) => theme.COLORS.text_primary};
`;

export const TextDay = styled.Text`
    font-family: ${({theme}) => theme.FONTS.contents};
    font-size: ${({theme}) => theme.FONTSIZES.larger};
    color: ${({theme}) => theme.COLORS.text_primary};
`;