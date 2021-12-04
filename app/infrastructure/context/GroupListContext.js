import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskGroupContext = createContext();

export const TaskGroupContextProvider = ({children}) => {

const [grouplist, setGrouplist] = useState([]);

//function to add group to list
const add =(taskgroup) => {
    setGrouplist([...grouplist, taskgroup]);
};

//function to delete group from list
const remove = (group) => {
  const newGroupList = grouplist.filter(
    (x) => x !== group
  );
  setGrouplist(newGroupList);
}

  //store task groups in async storage
  const storeGroups = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      console.log("saving error: ", e);
    }
  };

  //load stored groups
  const getGroups = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
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