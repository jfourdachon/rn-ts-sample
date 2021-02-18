import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import Card from '../components/Card'
import ChosenNumber from '../components/ChosenNumber'
import style from '../constants/style/text'

const generatedRandomNumber = (min: number, max: number, exclude: number | null): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generatedRandomNumber(min, max, exclude)
    } else {
        return rndNum
    }
}

type IProps = {
    userChoice: number,
    onGameOver: (numOfRounds: number) => void
}

enum Direction {
    Lower = 'LOWER',
    Greater = 'GREATER',
}

const GameScreen = ({ userChoice, onGameOver }: IProps) => {
    const currentLow = useRef<number>(1)
    const currentHigh = useRef<number>(100)

    let lower: number = +currentLow.current
    let higher: number = +currentHigh.current

    const [currentGuess, setCurrentGuess] = useState(generatedRandomNumber(lower, higher, userChoice))
    const [rounds, setRounds] = useState(0)

    const nextGuessHandler = (direction: Direction) => {
        if (
            (direction === Direction.Lower && currentGuess < userChoice) ||
            (direction === Direction.Greater && currentGuess > userChoice)
        ) {
            Alert.alert("Don't lie", 'You know that is wrong', [{ text: 'Sorry', style: 'cancel' }])
            return
        }

        if (direction === Direction.Lower) {
            currentHigh.current = currentGuess
            higher = +currentHigh.current
        } else {
            currentLow.current = currentGuess
            lower = +currentLow.current
        }
        const nextNumber = generatedRandomNumber(lower, higher, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currentRound => currentRound + 1)
    }

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])
    return (
        <View style={styles.screen}>
            <Text style={style.body}>Opponent's guess</Text>
            <ChosenNumber selectedNumber={currentGuess} />
            <Card style={styles.buttonContainer}>
                <Button
                    title="LOWER"
                    onPress={() => {
                        nextGuessHandler(Direction.Lower)
                    }}
                />
                <Button
                    title="GREATER"
                    onPress={() => {
                        nextGuessHandler(Direction.Greater)
                    }}
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
})

export default GameScreen
