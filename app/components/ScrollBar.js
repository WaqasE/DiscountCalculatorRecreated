import React,{useRef, useCallback} from 'react';
import { useState } from 'react';
import {  StyleSheet,TouchableOpacity,View, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler'
import colors from '../config/colors';



export default function ScrollBar({percentage=0})  {

    const left = useRef(new Animated.Value(0));

    const onGestureEvent = useCallback(
		Animated.event(
			[{
				nativeEvent: {
                    translationX: left.current,
				},
			}],
			{ useNativeDriver: true },
		),
		[],
    );

    

    return  (
        <View style={styles.container}>
            <Animated.View style={[styles.container, {width:percentage===''?'0%':`${percentage}%`, backgroundColor:colors.secondary,position:'absolute'}]}/>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                   <Animated.View 
                            style={{
                                width:30,
                                height:30, 
                                borderRadius:15, 
                                backgroundColor:colors.accent,
                                position:'absolute',
                                marginLeft:-10,
                                left:percentage===''?'0%':`${percentage}%`,
                                transform:[{
                                    translateX:left.current.interpolate({
                                        inputRange: [0,100],
                                        outputRange: [0,100]})
                                    }]
                                }}
                    />
            </PanGestureHandler>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        height:15,
        width:'80%',
        borderRadius:20,
        backgroundColor:'rgba(255, 192, 40,0.4)',
        marginTop:15,
        justifyContent:'center',

    }
 });