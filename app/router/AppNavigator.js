import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import History from '../screens/History'

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
      <Drawer.Navigator 
            initialRouteName="Home"
            drawerStyle={{backgroundColor:colors.primary,paddingVertical:'30%', paddingLeft:'2%' }}
        drawerContentOptions={{activeTintColor:'white', inactiveTintColor:'#d3d3d3',labelStyle:{fontWeight:'bold', fontSize:16,},}}
        screenOptions={({ route }) => ({
                drawerIcon: ({ focused, color, size=25 }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                } 
                else if (route.name === 'History') {
                    iconName = focused 
                    ? 'history'
                    : 'history';
                }
                 // You can return any component that you like here!
                 return <MaterialIcons name={iconName} size={size} color={colors.accent} />;
             },
             })}
      
      
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="History" component={History} />
      </Drawer.Navigator>
  );
}
