import React from 'react';
import {  StyleSheet,Text } from 'react-native';
import colors from '../config/colors';

export default function AppHeading({children, color='primary', fontSize=70})  {
    return  (
        <Text style={[styles.container , {color:colors[color], fontSize:fontSize}]}>{children} </Text>
     );
}

const styles = StyleSheet.create({
    container:{
        color:colors.primary,
        fontSize:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        marginRight:-10
    }
 });