import React, { useState, useContext } from "react";
import { Alert, ScrollView} from "react-native";
import { FlipInView } from "./components/animations";
import { TaskGroupContext } from "../../infrastructure/context/GroupListContext";

import { Group } from "./components/Group";
import { Header } from "./components/Header";
import {
  SafeArea,
  GroupSquare,
  InputContainer,
  UserInput,
  FloatingBtn,
  FloatingBtnText
} from "./components/styles";


export const TaskGroups = ({ navigation }) => {
  const [taskgroup, setTaskgroup] = useState(null);
  const [hidden, setHidden] = useState(true);

  const {grouplist, addToGroupList} =useContext(TaskGroupContext)
  //function for submit button
  const handleSubmit = () => {
    if (taskgroup) {
      addToGroupList(taskgroup);
      setTaskgroup(null);
    } else {
      Alert.alert("Oops! Looks like you forgot to enter a group name");
    }
  };

  return (
    <SafeArea>
      <Header />
      <ScrollView>
        <GroupSquare>
          {grouplist !== null ? (
          grouplist.map((item, index) => {
            return (
              <Group
                key={index}
                title={item}
                onGroupClick={navigation.navigate}
              />
            );
          })
          ):(null)}
        </GroupSquare>
      </ScrollView>

      <FloatingBtn
        onPress={() => {
          setHidden(!hidden);
        }}>
       <>
         <FloatingBtnText>+</FloatingBtnText>
         </>
      </FloatingBtn>

      {!hidden &&
        <FlipInView>
          <InputContainer>
            <UserInput
              onChangeText={(taskgroup) => setTaskgroup(taskgroup)}
              value={taskgroup}
              placeholder="add a task group"
              onSubmitEditing={() => {
                handleSubmit()
                setHidden(!hidden)
              }}
            />
          </InputContainer>
        </FlipInView>
      }
    </SafeArea>
  );
};
