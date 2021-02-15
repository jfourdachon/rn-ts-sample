import React, { } from 'react';
import { SafeAreaView, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native'
import { lightTheme } from "./styles/theme";

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

const App = () => {

    return (
        <ThemeProvider theme={lightTheme}>
                <View style={{ flex: 1 }}>
                    <Header title="Guess a Number" />
                    <StartGameScreen />
                </View>
        </ThemeProvider >
    );
}


export default App;