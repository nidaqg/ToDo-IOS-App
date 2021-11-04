import React from 'react';
import styled from "styled-components/native";


const HeaderCard = styled.ImageBackground`
height:200px;
background-color: dodgerblue;
align-items: center;
justify-content: center;
`


export const Header = () => {
    return (
        <>
        <HeaderCard
        source={require("../../../assets/background.png")}
        resizeMode="cover"
        >
        </HeaderCard>
        </>
    )
}