import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface FilterButtonProps extends TouchableOpacityProps {
  active?: boolean;
}

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const HeaderYoutube = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.COLORS.text_primary};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  font-size: 30px;
  max-width: 70%;
  text-align: center;
`;

export const TextView = styled.View`
  margin-top: 30px;
  gap: 10px;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  background-color: ${({ theme, active }) => active ? theme.COLORS.primary : null };
  border-radius: 20px;
  padding: 8px 15px;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

export const FilterButtonText = styled.Text<{ active?: boolean }>`
  color: ${({ theme, active }) => active ? 'white' : theme.COLORS.primary};
  font-family: ${({ theme }) => theme.FONTS.button};
`;
