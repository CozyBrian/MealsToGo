import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
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

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
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
        {error && (
          <Spacer size="small">
            <Text varient="error">{error}</Text>
          </Spacer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            onPress={() => onLogin(email, pass)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator
            style={{ padding: 16 }}
            animating={true}
            color={"#60A5FA"}
          />
        )}
      </AccountContainer>
    </AccountBG>
  );
};
