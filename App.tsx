import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { lightTheme } from './styles/theme'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

const App = () => {
    const [userNumber, setUserNumber] = useState<number | null>(null)

    const startGameHandler = (selectedNumber: number | null) => {
        setUserNumber(selectedNumber)
    }
    return (
        <ThemeProvider theme={lightTheme}>
            <View style={{ flex: 1 }}>
                <Header title="Guess a Number" />
                {userNumber === null ? (
                    <StartGameScreen onStartGame={startGameHandler} />
                ) : (
                    <GameScreen userChoice={userNumber} />
                )}
            </View>
        </ThemeProvider>
    )
}

export default App
