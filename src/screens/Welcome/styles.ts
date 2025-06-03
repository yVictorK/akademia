import { ImageBackground } from "react-native";
import styled from "styled-components/native";



export const HomeContainer = styled(ImageBackground)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
`;