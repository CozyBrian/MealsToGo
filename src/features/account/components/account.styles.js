import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBG = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[1]};
  margin-top: ${(props) => props.theme.space[1]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  margin: ${(props) => props.theme.space[1]};
`;

export const AuthInput = styled(TextInput)`
  height: 60px;
  width: 300px;
  margin: ${(props) => props.theme.space[1]};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;
