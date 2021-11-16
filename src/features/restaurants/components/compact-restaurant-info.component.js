import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const CompactWebView = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ url: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
