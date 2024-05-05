import React, { useEffect } from "react";
import { Controller, Control, FieldValues} from "react-hook-form";
import { TextInputController, Container, ChildrenContainer, ErrorText } from "./styles";
import { useTheme } from "styled-components/native";
import { Text, TextInput } from "react-native";

type InputProps = {
    control: any;
    name: string;
    type?: string;
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
                            secureTextEntry={isPassword}
                            style={{
                                color: fieldState.error ? 'red' : theme.COLORS.text_primary,
                            }}
                        />
                    </ChildrenContainer>

                    {fieldState.error ? <ErrorText>{fieldState.error.message}</ErrorText> : null}
                </Container>
            )}
        />
    );
}

