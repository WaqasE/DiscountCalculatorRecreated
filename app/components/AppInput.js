import React from 'react';
import {  StyleSheet,View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../config/colors';

export default function AppInput({...otherprops})  {
    return  (
        <TextInput
            {...otherprops}
            style={styles.container}
        />
     );
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        maxWidth:'80%',
        marginVertical:10,
        fontSize:70,
        color:colors.accent,
        fontWeight:'bold',
        letterSpacing:-0.2,
        marginRight:5
        
    }
 });