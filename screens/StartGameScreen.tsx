import React, { useEffect, useState } from 'react'
import {
    Button,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Text,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native'
import styled from 'styled-components/native'
import style from '../constants/style/text'

import Card from '../components/Card'
import ChosenNumber from '../components/ChosenNumber'
import Input from '../components/Input'
import colors from '../constants/colors'
import { Capitalize, KeyboarType } from '../constants/enums/textInput'
import MainButton from '../components/MainButton'

const StartGameView = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
`
const StartGameText = styled.Text``

const StartGameTitle = styled.Text`
    margin-top: 10px;
    margin-bottom: 10px;
`

type IProps = {
    onStartGame: (selectedNumber: number) => void
}

export const StartGameScreen = (props: IProps) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState<number>(0)
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)



    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }

        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    },)



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
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
                {
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler,
                },
            ])
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
                    <Text style={style.body}>You selected</Text>

                    <ChosenNumber selectedNumber={selectedNumber} />
                    <MainButton
                        onPress={() => {
                            props.onStartGame(selectedNumber)
                        }}
                    >
                        START GAME
                    </MainButton>
                </Card>
            </View>
        )
    }


    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <StartGameView>
                        <StartGameTitle style={style.title}>Start a new Game!</StartGameTitle>
                        <Card style={styles.card}>
                            <StartGameText style={style.body}>Select a number</StartGameText>
                            <Input
                                style={styles.input}
                                autoCorrect={false}
                                autoCapitalize={Capitalize.None}
                                keyboardType={KeyboarType.Numeric}
                                maxLength={2}
                                onChangeText={nbInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}>
                                    <Button title="Reset" onPress={resetInputHandler} color={colors.accent} />
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button title="Confirm" onPress={confirmInput} color={colors.primary} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </StartGameView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    card: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    // button: {
    //     width: Dimensions.get('window').width / 4,
    // },
    input: {
        width: 50,
        textAlign: 'center',
    },
})
