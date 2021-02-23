import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { lightTheme } from './styles/theme'

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = async () => {
    await Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
}

const App = () => {
    const [userNumber, setUserNumber] = useState<number>(0)
    const [guessRounds, setGuessRounds] = useState(0)
    const [dataLoaded, setDataLoaded] = useState(false)

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err: any) => console.log(err)}
            />
        )
    }

    const startGameHandler = (selectedNumber: number) => {
        setUserNumber(selectedNumber)
        setGuessRounds(0)
    }

    const gameOverHandler = (numOfRounds: number) => {
        setGuessRounds(numOfRounds)
    }

    const startNewGameHandler = () => {
        setUserNumber(0)
    }
    return (
        <SafeAreaView>
            <ThemeProvider theme={lightTheme}>
                <View style={{ flex: 1 }}>
                    <Header title="Guess a Number" />
                    {userNumber === 0 ? (
                        <StartGameScreen onStartGame={startGameHandler} />
                    ) : guessRounds <= 0 ? (
                        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
                    ) : (
                        <GameOverScreen
                            roundsCount={guessRounds}
                            userChoice={userNumber}
                            startNewGame={startNewGameHandler}
                        />
                    )}
                </View>
            </ThemeProvider>
        </SafeAreaView>
    )
}

export default App
