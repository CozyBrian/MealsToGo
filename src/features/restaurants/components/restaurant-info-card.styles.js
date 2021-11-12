import styled from "styled-components";
import { Title, Paragraph, Card } from "react-native-paper";
import { FlatList } from "react-native";

export const RCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Titlee = styled(Title)`
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 12,
  },
})``;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
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
