import styled from "styled-components";
import { Title, Paragraph } from "react-native-paper";

export const Titlee = styled(Title)`
  font-family: ${(props) => props.theme.fonts.body};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RedText = styled.Text`
  color: red;
  font-size: 12px;
`;

export const Spacer = styled.View`
  padding-left: 8px;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const P = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.heading};
`;
