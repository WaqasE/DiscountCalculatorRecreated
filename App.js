import { NavigationContainer } from '@react-navigation/native';
import React,{ useState, useEffect } from 'react';


import AppNavigator from './app/router/AppNavigator';
import HistoryContext from './app/storage/HistoryContext'
import Storage from './app/storage/Storage'


export default function App() {

  const [ history, setHistory ] = useState([])

  const restoreHistory = async() =>{
    const token = await Storage.getToken();
    if(!token)return
    setHistory(token)
    console.log(token)
  }


  useEffect(()=>{
    restoreHistory()
  },[])


  return (
    <HistoryContext.Provider value={{history, setHistory}}>
        <NavigationContainer>
              <AppNavigator/>
      </NavigationContainer>
   </HistoryContext.Provider>
  );
}
