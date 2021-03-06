import React from 'react';
import {  StyleSheet,Text } from 'react-native';
import colors from '../config/colors';

export default function AppText({children, color='primary', fontSize=20, bold=true})  {
    return  (
        <Text style={[styles.container , {color:colors[color], fontSize:fontSize, fontWeight:bold?'bold':'normal'}]}>{children} </Text>
     );
}

const styles = StyleSheet.create({
    container:{
        color:colors.primary,
        fontSize:20,
        textTransform:'uppercase',
        letterSpacing:3
    }
 });