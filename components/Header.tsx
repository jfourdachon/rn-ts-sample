import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import colors from '../constants/colors'
import style from '../constants/style/text'

const HeaderView = styled.View`
    width: 100%;
    height: 80px;
    background-color: ${colors.primary};
    padding-top: 25px;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled.Text`
    color: #0c0b0b;
`

export type HeaderProps = {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={[style.title]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: Platform.OS === 'android' ? colors.primary : 'white',
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    },
    headerText: {
        color: Platform.OS === 'ios' ? colors.primary : 'white'
    }
})
export default Header
