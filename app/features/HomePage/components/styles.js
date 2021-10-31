import styled from "styled-components/native";
import { FAB, Searchbar, TextInput } from 'react-native-paper';


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
bottom: 26px;
left:10px;
width: 100%;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;

export const UserInput = styled(TextInput)`
width: 300px;
background-color: white;
border-radius: 10px;
`;

export const FloatingBtn = styled(FAB)`
position: absolute;
    margin: 16px;
    right: 0px;
    bottom: 10px;
    background-color: black;
`;


