import React, {useState, useContext} from 'react';
import {  StatusBar, StyleSheet,TouchableHighlight,View } from 'react-native';
import { Foundation, MaterialIcons } from '@expo/vector-icons'

import AppInput from '../components/AppInput';
import AppText from '../components/AppText';
import AppHeading from '../components/AppHeading';
import Card from '../components/Card';
import colors from '../config/colors';
import ScrollBar from '../components/ScrollBar';
import Storage from '../storage/Storage'
import HistoryContext from '../storage/HistoryContext'

export default function Home({navigation})  {
    const [price, setPrice] = useState('')
    const [discount,  setDiscount] = useState('')
    const data = useContext(HistoryContext)

    const SaveHistory = () =>{
        
        var previousHistory = [];
        previousHistory=data.history;
        var newHistory = [...previousHistory, { id:previousHistory.length, price:price,   discount:discount,     final:parseFloat(price - price*discount/100).toFixed(2),}]
        Storage.setToken(JSON.stringify(newHistory))
        data.setHistory(newHistory)
    }

    return  (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Card>
            <TouchableHighlight underlayColor="rgba(0,0,0,0.7)" style={[styles.btn, {left:10, }]} onPress={()=>{navigation.openDrawer()}}>
                 <Foundation name="graph-horizontal" size={30} color={colors.accent} />
            </TouchableHighlight>
           { price && discount ?<TouchableHighlight underlayColor="rgba(0,0,0,0.7)" style={[styles.btn, {right:10, }]} onPress={ SaveHistory}>
                 <MaterialIcons name="save" size={30} color={colors.accent} />
            </TouchableHighlight>
            :null
            }
                <AppText color='secondary'>
                      starting price
                </AppText>
                <View style={{flexDirection:'row',alignItems:'center',height:'40%',width:'80%',justifyContent:'center'}}>
                    <AppInput
                        maxLength={7}
                        keyboardType='number-pad'
                        placeholder="0"
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        selectionColor='rgba(255,255,255,0.5)'
                        isUnderlineRequired={false}
                        onChangeText ={(price)=>{setPrice(price)}}
                        value={price}
                    />
                     <AppText color='secondary' fontSize={30}>
                            $
                    </AppText>
                </View>
            </Card>
            <Card marginTop={'1%'}>
                <AppText color='secondary'>
                     discount
                </AppText>
                <View style={{flexDirection:'row',alignItems:'center',height:'40%'}}>
                <AppInput
                        maxLength={2}
                        keyboardType='number-pad'
                        placeholder="0"
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        selectionColor='rgba(255,255,255,0.5)'
                        isUnderlineRequired={false}
                        onChangeText ={(discount)=>{setDiscount(discount)}}
                        value={discount}
                    />
                    <AppText color='secondary' fontSize={30}>
                            %
                    </AppText>
                </View>
                <ScrollBar percentage={discount}/>
            </Card>
            <Card bg='secondary'>
            <AppText>
                     Final Price
                </AppText>
                <View style={{flexDirection:'row',alignItems:'center',height:'40%'}}>
                    <AppHeading  fontSize={70}>
                        {parseFloat(price - price*discount/100).toFixed(2)}
                    </AppHeading>
                    <AppText fontSize={30}>
                           $
                    </AppText>
                </View>
            </Card>

         

        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary
    },
    btn:{
        width:50,
        height:50,
        position: 'absolute',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1000,
        top:50
    }
 });