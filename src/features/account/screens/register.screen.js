import React, { useState, useContext } from "react";
import { View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/text";
import {
  AccountBG,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repPass, setRepPass] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBG>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={pass}
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          onChangeText={(p) => setPass(p)}
        />
        <AuthInput
          label="Repeated Password"
          value={repPass}
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          onChangeText={(rp) => setRepPass(rp)}
        />
        {error && (
          <Spacer size="small">
            <Text varient="error">{error}</Text>
          </Spacer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="email"
            onPress={() => onRegister(email, pass, repPass)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={"#60A5FA"} />
        )}
      </AccountContainer>
    </AccountBG>
  );
};
