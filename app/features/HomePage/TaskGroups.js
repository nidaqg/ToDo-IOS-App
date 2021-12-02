import React, { useState, useContext } from "react";
import { Alert, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
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
          {grouplist.map((item, index) => {
            return (
              <Group
                key={index}
                title={item}
                onGroupClick={navigation.navigate}
              />
            );
          })}
        </GroupSquare>
      </ScrollView>

      <FloatingBtn
        icon="plus"
        onPress={() => {
          setHidden(false);
        }}
      />

      {hidden ? null : (
        <FlipInView>
          <InputContainer>
            <UserInput
              style={{ width: 300 }}
              onChangeText={(taskgroup) => setTaskgroup(taskgroup)}
              value={taskgroup}
              placeholder="add a task group"
              right={
                <TextInput.Icon
                  name="plus-circle-outline"
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              }
              left={
                <TextInput.Icon name="close" onPress={() => setHidden(true)} />
              }
            />
          </InputContainer>
        </FlipInView>
      )}
    </SafeArea>
  );
};
