import React from 'react';
import {  StyleSheet,View } from 'react-native';
import colors from '../config/colors';

export default function Card({children, bg='primary', marginTop=0})  {
    return  (
        <View style={[styles.container, {backgroundColor:colors[bg], marginTop:marginTop}]}>
            {children}
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:'33%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
 });