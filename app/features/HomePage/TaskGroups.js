import React, { useState } from "react";
import { Text, Keyboard, Alert, ScrollView } from "react-native";
import { Group } from "./components/Group";
import {
  SafeArea,
  GroupSquare,
  Title,
  HeaderContainer,
  InputContainer,
  UserInput,
  AddButton,
} from "./components/styles";

export const TaskGroups = () => {
  const [taskgroup, setTaskgroup] = useState("");
  const [grouplist, setGrouplist] = useState([]);

  const handleChange = (text) => {
    setTaskgroup(text);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (taskgroup) {
      setGrouplist([...grouplist, taskgroup]);
      setTaskgroup(null);
    } else {
      Alert.alert("Oops! Looks like you forgot to enter a group name");
    }
  };

  return (
    <SafeArea>
        <ScrollView>
      <HeaderContainer>
        <Title>Let's Get It Done!</Title>
      </HeaderContainer>
      
      <GroupSquare>
        {grouplist.map((item, index) => {
          return <Group key={index} title={item} />;
        })}
        <Group title={"Groceries"} />
        <Group title={"School Stuff"} />
        <Group title={"Daily"} />
        <Group title={"Target"} />
      </GroupSquare>
      </ScrollView>

      <InputContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <UserInput
          onChangeText={handleChange}
          value={taskgroup}
          placeholder={"Add a new task group"}
        ></UserInput>

        <AddButton onPress={() => handleSubmit()}>
          <Text>+</Text>
        </AddButton>
      </InputContainer>
    </SafeArea>
  );
};
