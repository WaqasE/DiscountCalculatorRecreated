import React from 'react';
import * as SecureStore from 'expo-secure-store';

const key="Sp18Bcs172"

const setToken = async( token ) => {
    try{
        await SecureStore.setItemAsync(key, token)
        // console.log(sucess)
    }
    catch(err){
        console.log(err)
    }
}

const getToken = async()=>{
    try{
         const sucess = await SecureStore.getItemAsync(key)
         console.log(sucess)
         return sucess
    }
    catch(err){
        console.log(err)
    }
}

const removeToken = async() =>{
    try{
        await SecureStore.deleteItemAsync(key)
    }
    catch(err){
        console.log(err)
    }
}

export default {setToken, getToken, removeToken};