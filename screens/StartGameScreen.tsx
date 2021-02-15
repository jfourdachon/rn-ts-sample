import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native'

import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'
import { Capitalize, KeyboarType } from '../constants/enums/textInput'

const StartGameView = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
`;
const StartGameText = styled.Text``;

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
`;

const StartGameTitle = styled.Text`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = useState('')

    const nbInputHandler = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <StartGameView>
                <StartGameTitle>The Game Screen!</StartGameTitle>
                <Card style={styles.formView}>
                    <StartGameText>Select a number</StartGameText>
                    <Input style={styles.input} autoCorrect={false} autoCapitalize={Capitalize.None} keyboardType={KeyboarType.Numeric} maxLength={2} onChangeText={nbInputHandler} value={enteredValue} />
                    <ButtonContainer>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={() => { }} color={colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={() => { }} color={colors.primary} />
                        </View>
                    </ButtonContainer>
                </Card>
            </StartGameView>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    formView: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button: {
        width: '40%'
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})
