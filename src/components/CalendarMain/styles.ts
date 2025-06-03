import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const CalendarView = styled.View`
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    border-radius: 15px;
    padding:10px;
    gap: 5px;
    align-items: flex-start;
    margin-top: 20px;
    align-self: center;
`;

export const DaysView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    width: '100%';
    align-items: center;
    align-self: center;
`;

export const TextCalendar = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.contents};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const TextDay = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.contents};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.text_primary};
`;