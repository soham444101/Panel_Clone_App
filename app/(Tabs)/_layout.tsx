import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, useColorScheme } from "react-native";

import { Tabs, useNavigation } from 'expo-router';
import { Colors } from "@/constants/Colors";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useState } from "react";
// import { useState } from "react";
// const [hideTabBar, setHideTabBar] = useState<'none' | 'flex'>('flex');


export default function foryou() {
  
  const theme = useColorScheme() ?? 'light';
  //  function toggleTabBar (y:boolean) {
  //   setHideTabBar((prev) => !prev); // Toggle the value
  // };
  

  return <Tabs screenOptions={{
    tabBarActiveTintColor: Colors[theme].text,
    tabBarInactiveTintColor: 'gray',
     headerShown: false,
      tabBarStyle: {
      backgroundColor: "transprent",
    },
    
  }}>
    <Tabs.Screen
      name="foryou"
      
      options={{
        title: 'For You',
       
        tabBarIcon: ({ color }) =><FontAwesome5 name="home" size={30} color={theme=="light"? Colors.dark.icon:Colors.light.icon}  /> ,
        tabBarStyle: {
          // backgroundColor: "transprent",
          backgroundColor: Colors[theme].background,

          height:"10%"
        },
        tabBarIconStyle:{
          marginBottom:4
        },
        tabBarLabelStyle:{
          fontSize:12,
          paddingLeft:5
        }
        ,
        
      }}
      
    />
    <Tabs.Screen
      name="index"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => < FontAwesome5 name="layer-group" size={30} color={theme=="light"? Colors.dark.icon:Colors.light.icon} />,
        // tabBarStyle: {

        // },
        tabBarIconStyle:{
          marginBottom:4,
        },
        tabBarLabelStyle:{
          fontSize:12,
          // paddingLeft:5
          // color:theme=="light"? Colors.dark.icon:Colors.light.icon
        }
      }}

    />
   
    <Tabs.Screen
      name="account"
      options={{
        title: 'Account',
       
        tabBarIcon: ({ color }) =>  <MaterialCommunityIcons name="account-circle-outline" size={30} color={theme=="light"? Colors.dark.icon:Colors.light.icon}/>,
        tabBarStyle: {
          // display:h?"flex":"none" , // Always hide tab bar for this screen
          backgroundColor: Colors[theme].background,
  height:"10%"
        },
        tabBarIconStyle:{
          marginBottom:4
        },
        tabBarLabelStyle:{
          fontSize:12,
          // paddingLeft:5
        }
      }}

      />

  </Tabs>

}

{/* <Button title ="singnnjs"></Button> */ }
