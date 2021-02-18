import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { lightTheme } from './styles/theme'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const App = () => {
    const [userNumber, setUserNumber] = useState<number>(0)
    const [guessRounds, setGuessRounds] = useState(0)

    const startGameHandler = (selectedNumber: number) => {
        setUserNumber(selectedNumber)
        setGuessRounds(0)
    }

    const gameOverHandler = (numOfRounds: number) => {
        setGuessRounds(numOfRounds);
    }

    const startNewGameHandler = () => {
        setUserNumber(0)
    }
    return (
        <ThemeProvider theme={lightTheme}>
            <View style={{ flex: 1 }}>
                <Header title="Guess a Number" />
                {userNumber === 0 ? (
                    <StartGameScreen onStartGame={startGameHandler} />
                ) : guessRounds <= 0 ? (
                    <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
                ) : (
                    <GameOverScreen roundsCount={guessRounds} userChoice={userNumber}  startNewGame={startNewGameHandler} />
                )}
            </View>
        </ThemeProvider>
    )
}

export default App
