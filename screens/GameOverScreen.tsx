import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

type IProps = {
    roundsCount: number
    userChoice: number
    startNewGame: () => void
}

const GameOverScreen = ({ roundsCount, userChoice, startNewGame }: IProps) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over!</Text>
            <Text>Number of rounds: {roundsCount}</Text>
            <Text>Number was: {userChoice}</Text>
            <Button title="NEW GAME" onPress={startNewGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default GameOverScreen
