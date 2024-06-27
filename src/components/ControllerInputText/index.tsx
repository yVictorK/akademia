import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextInputController, Container, ChildrenContainer, ErrorText } from "./styles";
import { useTheme } from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";
import { Eye, EyeSlash } from 'phosphor-react-native';

type InputProps = {
  control: any;
  name: string;
  placeholder?: string;
  children?: React.ReactNode;
  isPassword?: boolean;
  errorMessage?: string;
} & React.ComponentProps<typeof TextInput>;

export default function ControllerTextInput({
  control,
  name,
  placeholder,
  children,
  isPassword,
  errorMessage,
  ...textInputProps
}: InputProps) {
  const theme = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(!isPassword);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Container error={!!fieldState.error}>
          <ChildrenContainer>
            {children}
            <TextInputController
              {...textInputProps}
              onChangeText={field.onChange}
              value={field.value}
              placeholder={placeholder}
              placeholderTextColor={fieldState.error ? 'red' : theme.COLORS.text_primary}
              secureTextEntry={isPassword && !passwordVisible}
              style={{
                color: fieldState.error ? 'red' : theme.COLORS.text_primary,
              }}
            />
            {isPassword && (
              <TouchableOpacity onPress={togglePasswordVisibility}>
                {passwordVisible ? (
                  <Eye size={20} color={fieldState.error ? 'red' : theme.COLORS.text_primary} />
                ) : (
                  <EyeSlash size={20} color={fieldState.error ? 'red' : theme.COLORS.text_primary} />
                )}
              </TouchableOpacity>
            )}
          </ChildrenContainer>

          {fieldState.error ? <ErrorText>{fieldState.error.message}</ErrorText> : null}
        </Container>
      )}
    />
  );
}
