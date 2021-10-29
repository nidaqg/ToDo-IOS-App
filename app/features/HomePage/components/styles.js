import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const GroupSquare = styled.View`
  flex-direction: row;
  justify-content: center;
  top: 100px;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  top: 50px;
`;

export const InputContainer = styled.KeyboardAvoidingView`
position: absolute;
bottom: 10px;
width: 100%;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;

export const UserInput = styled.TextInput`
padding-vertical: 15px;
padding-horizontal: 15px;
width: 300px;
background-color: white;
border-radius: 60px;
border-width: 1px;
`;

export const AddButton = styled.TouchableOpacity`
width: 60px;
height: 60px;
background-color: white;
border-radius:60px;
border-width:1px;
align-items: center;
justify-content: center;
`;
