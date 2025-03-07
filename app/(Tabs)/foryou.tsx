import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, useColorScheme, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Spliteview_index } from "@/components/SpliteView";
import { UseWallpaper, UseSuggested, UseLiked, UseLibrarey } from "@/hooks/useWallpaper";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from '@/constants/Colors';
import { Usersss } from "@/hooks/Users";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import React, { useState } from "react";
import { throttle } from 'lodash';

const Tab = createMaterialTopTabNavigator();
const width = Dimensions.get('screen').width;
const height = Dimensions.get("screen").height;


export default function MyTabs() {
    const theme = useColorScheme() ?? 'light';
    // const [yoffset, setScrollY] = useState(0);
    const [showabsolute, setabsolute] = useState<"absolute"|"relative">("relative");
    const [yoffset,setScrollY]=useState(0);








    return (


        <View style={{
            backgroundColor: Colors[theme].background,
            flex: 1,
            position:"relative",
            
            // alignItems:"center"
            // justifyContent:"center"
        }}    >
            <StatusBar
                translucent={true}           // Enables transparency
                backgroundColor="transparent" // Transparent background
            //    barStyle ="light-content"      // Light icons/text for visibility
            />

            {/* <View style={{backgroundColor:"red",position:"absolute",top:55}}> */}
            <Link href={"/account"} style={{ alignSelf: "center", backgroundColor: Colors[theme].background,marginTop:"10%",position:showabsolute}}>

                <Ionicons name="person-circle-sharp" size={80} color="grey" selectionColor={"black"} style={{ paddingRight: 0,backgroundColor: Colors[theme].background }} />

                {/* <View style={{ backgroundColor: "black", borderRadius: 15, width: 27, height: 27, borderWidth: 4, borderColor: "white",position:"absolute",bottom:20}}>
                   
                    <MaterialIcons name="edit" size={16} color="white" style={{ alignSelf: "center" ,     position: "absolute", 
      top: 0,      // Position the icon near the bottom of the parent
      left: 65,}} /> */}


            </Link>
            <Tab.Navigator
              
                screenOptions={
                    {
                        tabBarLabelStyle: {
                            fontFamily: "BR_F",
                            fontSize: 15
                        },
                        tabBarInactiveTintColor: Colors[theme].text,
                        tabBarActiveTintColor: Colors[theme].text,
                        tabBarStyle: {
                            backgroundColor: Colors[theme].background,
                            height: 50, // Fixed height for tab bar
                            display: 'flex',
                            position:"relative"
                        //     borderColor: 'red',
                        // borderWidth: 5,
                        },

                        tabBarIndicatorStyle: {
                            backgroundColor: Colors[theme].indicator,
                            height: 5,
                            width: "25%",
                            marginLeft: 15,

                        }
                    }
                }
            >

                <Tab.Screen name="Suggested" component={Suggested} />
                <Tab.Screen name="Liked" component={Likes} />
                <Tab.Screen name="Library" component={Library} />
            </Tab.Navigator>
        </View >

    );

    function Likes() {
        const wallpapers = UseLiked();
        const theme = useColorScheme() ?? 'light';
        const userss = Usersss();

        return <>

            <ThemedView style={{ flex: 1 }}>
                
                <Spliteview_index

OnScroll = {
    ({yoffset,value})=>
        {
            // setScrollY(yoffset);
            // setShowTabBar((yoffset <= 100)); // Hide tab bar if user scrolls down
            setabsolute(value?"absolute":"relative")
            
        }
    }
// }
                    Wallpapersss={wallpapers}
                    users={userss}
                />

            </ThemedView>
        </>
    }
    function Suggested() {
        const wallpapers = UseSuggested();
        const userss = Usersss();

        const theme = useColorScheme() ?? 'light';

        return <ThemedView style={{ flex: 1 }}>
            <Spliteview_index 
                Wallpapersss={wallpapers}
                users={userss}
            />

        </ThemedView>
    }
    function Library() {
        const wallpapers = UseLibrarey();
        const theme = useColorScheme() ?? 'light';
        const userss = Usersss();

        return <ThemedView style={{ flex: 1 }}>

            <Spliteview_index 
            // OnScroll={
            //     ({ yoffset, value }) => {
            //         setScrollY(yoffset);
            //         setShowTabBar(yoffset >= 100); // Hide tab bar if user scrolls down
            //         console.log(yoffset)

            //     }
            // }
                Wallpapersss={wallpapers}
                users={userss}
            />
        </ThemedView>
    }

}













































// import { SafeAreaView } from "react-native-safe-area-context";
// import { View, Text, useColorScheme, Dimensions } from "react-native";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Colors } from '@/constants/Colors';
// import { Usersss } from "@/hooks/Users";
// import { UseLibrarey, UseSuggested } from "@/hooks/useWallpaper";
// import { ThemedView } from "@/components/ThemedView";
// import { Spliteview_index } from "@/components/SpliteView";

// const Tab = createMaterialTopTabNavigator();
// const width = Dimensions.get('screen').width;
// const height = Dimensions.get("screen").height;

// export default function MyTabs() {
//     const theme = useColorScheme() ?? 'light';

//     return (
//         <SafeAreaView
//             style={{
//                 backgroundColor: theme === 'light' ? Colors.light.icon : Colors.dark.icon,
//                 flex: 1,
//                 // paddingTop: StatusBar.currentHeight || 20,
//             }}
//         >
//             <StatusBar translucent backgroundColor="transparent" />
//             <Tab.Navigator
//                 screenOptions={{
//                     tabBarLabelStyle: {
//                         fontFamily: "BR_F",
//                         fontSize: 15,
//                     },
//                     tabBarInactiveTintColor: Colors[theme].text,
//                     tabBarActiveTintColor: Colors[theme].text,
//                     tabBarStyle: {
//                         backgroundColor: Colors[theme].background,
//                         height: 50, // Fixed height for tab bar
//                         display: 'flex',
//                     },
//                     tabBarIndicatorStyle: {
//                         backgroundColor: Colors[theme].indicator,
//                         height: 5,
//                         width: "25%",
//                         marginLeft: 15,
//                     },
//                 }}
//             >
//                 <Tab.Screen name="Suggested" component={Suggested} />
//                 <Tab.Screen name="Liked" component={Likes} />
//                 <Tab.Screen name="Library" component={Library} />
//             </Tab.Navigator>
//         </SafeAreaView>
//     );

//     function Suggested() {
      
//         const wallpapers = UseLibrarey();
//         const theme = useColorScheme() ?? 'light';
//         const userss = Usersss();
        
//                 return <View style={{ flex: 1, }}>
                   
//                    <Spliteview_index 
//                 Wallpapersss={wallpapers}
//                 users={userss}
//             />


//                 </View>
//     }

//     function Likes() {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <Text>Likes Screen</Text>
//             </View>
//         );
//     }

//     function Library() {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <Text>Library Screen</Text>
//             </View>
//         );
//     }
// }


//     const [showTabBar, setShowTabBar] = useState(false);
//     const [showabsolute, setabsolute] = useState<"absolute"|"relative">("relative");
//     const navigation = useNavigation();
//   // Update the tabBarStyle dynamically
// React.useEffect(() => {
// navigation.setOptions({
//   tabBarStyle:{ 
//      display: showTabBar ?"flex": "none" ,
//     backgroundColor: Colors[theme].background,
//     height:"10%"

//     }
// });
// }, [showTabBar, theme]);