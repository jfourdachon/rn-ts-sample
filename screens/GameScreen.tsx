import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native'
import Card from '../components/Card'
import ChosenNumber from '../components/ChosenNumber'
import style from '../constants/style/text'
import MainButton from '../components/MainButton'
import { Ionicons } from '@expo/vector-icons'

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
    userChoice: number
    onGameOver: (numOfRounds: number) => void
}

enum Direction {
    Lower = 'LOWER',
    Greater = 'GREATER',
}

type ItemData = {
    item: number
    index: number
}

const GameScreen = ({ userChoice, onGameOver }: IProps) => {
    const currentLow = useRef<number>(1)
    const currentHigh = useRef<number>(100)

    let lower: number = +currentLow.current
    let higher: number = +currentHigh.current

    const initialGuess = generatedRandomNumber(lower, higher, userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])

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
            currentLow.current = currentGuess + 1
            lower = +currentLow.current
        }
        const nextNumber = generatedRandomNumber(lower, higher, currentGuess)
        setCurrentGuess(nextNumber)
        setPastGuesses((currentPastGuesses) => [nextNumber, ...currentPastGuesses])
    }

    const renderListItem = (itemData: ItemData, listLength: number) => (
        <View style={styles.listItem}>
            <Text style={style.body}># {listLength - itemData.index}</Text>
            <Text style={style.body}>{itemData.item}</Text>
        </View>
    )

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])
    return (
        <View style={styles.screen}>
            <Text style={style.body}>Opponent's guess</Text>
            <ChosenNumber selectedNumber={currentGuess} />
            <Card style={styles.buttonContainer}>
                <MainButton
                    onPress={() => {
                        nextGuessHandler(Direction.Lower)
                    }}
                >
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton
                    onPress={() => {
                        nextGuessHandler(Direction.Greater)
                    }}
                >
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item) => item.toString()}
                    data={pastGuesses}
                    renderItem={(itemData) => renderListItem(itemData, pastGuesses.length)}
                    contentContainerStyle={styles.list}
                />
            </View>
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
        width: 350,
        maxWidth: '90%',
    },
    listContainer: {
        width: '60%',
        flex: 1
    },
    list: {
        // flexGrow: 1
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
})

export default GameScreen
