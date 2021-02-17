import React, { useState } from 'react'
import {
    Button,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Text,
    Alert,
} from 'react-native'
import styled from 'styled-components/native'

import Card from '../components/Card'
import ChosenNumber from '../components/ChosenNumber'
import Input from '../components/Input'
import colors from '../constants/colors'
import { Capitalize, KeyboarType } from '../constants/enums/textInput'

const StartGameView = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
`
const StartGameText = styled.Text``

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
`

const StartGameTitle = styled.Text`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`

type IProps = {
    onStartGame: (selectedNumber: number | null) => void
}

export const StartGameScreen = (props: IProps) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null)

    const nbInputHandler = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ]
            )
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
            <View style={{ marginTop: 15 }}>
                <Card style={styles.card}>
                    <Text>You selected</Text>

                    <ChosenNumber selectedNumber={selectedNumber} />
                    <Button
                        title="START GAME"
                        onPress={() => {
                            console.log('bordel')
                            props.onStartGame(selectedNumber)
                        }}
                    />
                </Card>
            </View>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <StartGameView>
                <StartGameTitle>The Game Screen!</StartGameTitle>
                <Card style={styles.card}>
                    <StartGameText>Select a number</StartGameText>
                    <Input
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize={Capitalize.None}
                        keyboardType={KeyboarType.Numeric}
                        maxLength={2}
                        onChangeText={nbInputHandler}
                        value={enteredValue}
                    />
                    <ButtonContainer>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={colors.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmInput}
                                color={colors.primary}
                            />
                        </View>
                    </ButtonContainer>
                </Card>
                {confirmedOutput}
            </StartGameView>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button: {
        width: '40%',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
})
