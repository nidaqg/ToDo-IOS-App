import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToDoListContext } from './ToDoListContext';

export const TaskGroupContext = createContext();

export const TaskGroupContextProvider = ({children}) => {

const [grouplist, setGrouplist] = useState(null);

const{removeEntireGroup} = useContext(ToDoListContext)

//function to add group to list
const add =(taskgroup) => {
  if (grouplist !== null){
    setGrouplist([...grouplist, taskgroup])
  } else {
    setGrouplist([taskgroup])
  }
};

//function to delete group from list
const remove = (group) => {
  const newGroupList = grouplist.filter(
    (x) => x !== group
  );
  setGrouplist(newGroupList);
  removeEntireGroup(group);
}

  //store task groups in async storage
  const storeGroups = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log("STORE",jsonValue);
      await AsyncStorage.setItem('@GroupList', jsonValue);
    } catch (e) {
      console.log("saving error: ", e);
    }
  };

  //load stored groups
  const getGroups = async () => {
    try {
      const value = await AsyncStorage.getItem('@GroupList');
      console.log("GET",value)
      return value !== null ? setGrouplist(JSON.parse(value)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  //load and save groups to async
  useEffect(() => {
    grouplist !== null ?
    storeGroups(grouplist) : null
  }, [grouplist]);

  useEffect(() => {
    getGroups();
  }, []);



    return(
        <TaskGroupContext.Provider
        value={{
            grouplist,
            addToGroupList: add,
            removeFromGroupList: remove            
        }}
        >{children}</TaskGroupContext.Provider>
    )
}