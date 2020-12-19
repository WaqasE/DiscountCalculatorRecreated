import React from 'react';
import {  StyleSheet,View, TouchableHighlight, Text, FlatList } from 'react-native';
import { Foundation } from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from '../components/AppText';
import HistoryCard from '../components/HistoryCard';
import HistoryContext from '../storage/HistoryContext'
import { useContext } from 'react';

export default function History({navigation})  {

    const data = useContext(HistoryContext)
    const history =data.history;

    const deleteHistory = ({id}) =>{
        const data = useContext(HistoryContext)
        const previousHistory = [];
        previousHistory=data.history;
        newHistory = previousHistory.delete(id)
        Storage.setToken(newHistory)
        data.setHistory(newHistory)
    }
    
    return  (
        <View style={styles.container}>
               <TouchableHighlight underlayColor="rgba(0,0,0,0.7)" style={styles.btn} onPress={()=>{navigation.openDrawer()}}>
                 <Foundation name="graph-horizontal" size={30} color={colors.accent} />
            </TouchableHighlight>
            <AppText color='secondary' fontSize={20}>
                            History
            </AppText>
            <View style={{marginTop:30,width:'100%',height:'100%',alignItems:'center'}}>
          {  history&&
          <FlatList
                style={{width:'100%',height:'100%'}}
                keyExtractor={(item)=> item.id}
                 data={history}
                renderItem={
                    ({item, id})=>{
                        return(
                            <HistoryCard price={item.price} discount={item.discount} final={item.final}/> )}
                }
            />}
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:'center',
        paddingTop:60
    },
    btn:{
        width:50,
        height:50,
        position: 'absolute',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1000,
        left:10,
        top:50
    }
 });