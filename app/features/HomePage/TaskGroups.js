import React, { useState, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { FlipInView } from "./components/animations";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [grouplist, setGrouplist] = useState([]);
  const [taskgroup, setTaskgroup] = useState(null);

  const [hidden, setHidden] = useState(true);

  //function for submit button
  const handleSubmit = () => {
    if (taskgroup) {
      setGrouplist([...grouplist, taskgroup]);
      setTaskgroup(null);
    } else {
      Alert.alert("Oops! Looks like you forgot to enter a group name");
    }
  };

  //store task groups in async storage
  const storeGroups = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);
      await AsyncStorage.setItem("@grouplist", jsonValue);
    } catch (e) {
      console.log("saving error: ", e);
    }
  };

  //load stored groups
  const getGroups = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@grouplist");
      console.log("GET",jsonValue)
      return jsonValue != null ? setGrouplist(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  //load and save groups to async
  useEffect(() => {
    storeGroups(grouplist);
  }, [grouplist]);

  useEffect(() => {
    getGroups();
  }, []);

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
