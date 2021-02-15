import React from 'react'
import { TextInput, StyleSheet, ViewStyle } from 'react-native'
import { Capitalize, KeyboarType } from '../constants/enums/textInput'


export type InputProps = {
    style: { width: number, textAlign: string }
    autoCorrect: boolean;
    autoCapitalize: Capitalize;
    keyboardType: KeyboarType;
    maxLength: number;
    onChangeText: (inputText: string) => void;
    value: string
}

const Input = (props: InputProps) => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...props.style } as ViewStyle} />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})

export default Input
