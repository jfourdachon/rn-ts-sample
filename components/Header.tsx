import React from 'react'
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
`;

const HeaderText = styled.Text`
    color: #0c0b0b;
`;

export type HeaderProps = {
    title: string;
}

const Header = ({title}: HeaderProps) => {

    return (
        <HeaderView>
            <HeaderText style={style.title}>{title}</HeaderText>
        </HeaderView>
    )
}

export default Header