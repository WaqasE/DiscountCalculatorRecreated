import React from 'react';
import {  StyleSheet,View, TouchableHighlight, Text } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { MaterialIcons } from '@expo/vector-icons'


export default function HistoryCard({price=0, discount=0, final=0,onPress})  {
    return  (
        <View style={styles.container}>

               <View style={{flexDirection:'row'}}>
                    <AppText bold={false} color='secondary' fontSize={15}>Starting Price:</AppText>
                    <AppText bold={false} color='accent' fontSize={15}>{price} </AppText>
                    <Text style={styles.sign}>$</Text>
               </View>

               <View style={{flexDirection:'row', marginVertical:10}}>
                    <AppText bold={false} color='secondary' fontSize={15}>Discount:</AppText>
                    <AppText bold={false} color='accent' fontSize={15}>{discount} </AppText>
                    <Text style={styles.sign}>%</Text>
               </View>

               <View style={{flexDirection:'row',}}>
                    <AppText bold={false} color='secondary' fontSize={15}>Final Price:</AppText>
                    <AppText bold={false} color='accent' fontSize={15}>{final} </AppText>
                    <Text style={styles.sign}>$</Text>
               </View>

               <TouchableHighlight underlayColor="rgba(0,0,0,0.7)" style={styles.btn} onPress={onPress}>
                 <MaterialIcons name="delete" size={30} color={colors.accent} />
            </TouchableHighlight>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:120,
        width:'100%',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        paddingHorizontal:40,
    },
    btn:{
        width:50,
        height:50,
        position: 'absolute',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1000,
        right:20,
    },
    sign:{
        fontSize:15,
        color:colors.secondary,
        marginLeft:-10,
        fontWeight:'bold'

    }
 });
 