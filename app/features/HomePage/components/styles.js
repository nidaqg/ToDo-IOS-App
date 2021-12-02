import styled from "styled-components/native";
import { Button, Searchbar, TextInput } from 'react-native-paper';


export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const GroupSquare = styled.View`
  justify-content: center;
  margin: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;


export const InputContainer = styled.View`
position: absolute;
bottom: 0px;
width: 100%;
flex-direction: row;
justify-content: flex-start;
align-items: center;
justify-content: center;
`;

export const UserInput = styled(TextInput)`
width: 100%;
background-color: lightgrey;
border-radius: 5px;
`;

export const FloatingBtn = styled.TouchableOpacity`
position: absolute;
    margin: 16px;
    right: 0px;
    bottom: 60px;
    border-radius: 50px;
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
    background-color: black;
`;


