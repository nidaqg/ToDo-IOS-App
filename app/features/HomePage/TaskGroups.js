import React, { useState } from "react";
import { Keyboard, Alert, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

import { Group } from "./components/Group";
import {
  SafeArea,
  GroupSquare,
  Title,
  HeaderContainer,
  InputContainer,
  UserInput,
  FloatingBtn
} from "./components/styles";

export const TaskGroups = () => {
  const [taskgroup, setTaskgroup] = useState("");
  const [grouplist, setGrouplist] = useState([]);

  const [hidden, setHidden] = useState(true)

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

      <FloatingBtn
    icon="plus"
    onPress={() => setHidden(false)}
     />

{!hidden &&  <InputContainer>
        <UserInput
          onChangeText={handleChange}
          value={taskgroup}
          right={<TextInput.Icon 
            name="plus"
            onPress={()=> {
              handleSubmit();
              setHidden(true)
            }}
            />}
          placeholder={"Add a new task group"}
        />
      </InputContainer>



}
      
    </SafeArea>
  );
};
