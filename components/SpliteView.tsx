
import { UseWallpaper, wallpaper } from "@/hooks/useWallpaper"
import { View, Text, Button, Image, StyleSheet, FlatList, useColorScheme, Dimensions } from "react-native";
import { ImageCard } from "./ImageCard"
import React, { useState } from "react";
import { Downlode_index } from "./BottomSheet";
import { ThemedView } from "./ThemedView";
import { Usersss } from "@/hooks/Users"
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";











export function Spliteview_index(
  { Wallpapersss, OnScroll, users }: {
    Wallpapersss: wallpaper[];
    OnScroll?:(args: { yoffset: number; value: boolean }) => void;
    users: Usersss[];

  }
) {


  const [selectedWallpaper, setSelectedWallpaper] = useState<null | wallpaper>(null);
  const [selecteduser, setSelecteduser] = useState<null | Usersss>(null);
  // const [bottomshitvisiable, setbottomshitvisiable] = useState(false);
  const width = Dimensions.get('screen').width;
  const height= Dimensions.get("screen").height;

  const [showTabBar, setShowTabBar] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const navigation = useNavigation();

  const theme = useColorScheme() ?? 'light';
  
  // Update the tabBarStyle dynamically
  React.useEffect(() => {
    navigation.setOptions({
      tabBarStyle:{ 
         display: showTabBar ? "flex":"none"  ,
        backgroundColor: Colors[theme].background,
        height:"10%"
        }
    });
  }, [showTabBar, theme]);
var vertical= 0;

  return (
    <>
      <FlatList
        onScroll={(e) => {
           vertical = e.nativeEvent.contentOffset.y;
          OnScroll?.({ yoffset: vertical, value: false });
          //  Hide tab bar if user scrolls down

        }}
        scrollEventThrottle={16}
        data={Wallpapersss.filter((_, index) => index % 2 === 0).map((_, index) => [
          Wallpapersss[index],
          Wallpapersss[index + 1],
        ])}
        renderItem={({ item: [first, second], index }) => {
          const pairedUsers = [
            users[index ],
            users[index + 2],
          ]; // Get users corresponding to wallpapers in this row.

         
          return (
            <ThemedView style={style.container}>
              {/* { showSearchBar && 
                <ThemedView style={{width:width,height:height/20,position:"relative",display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <MaterialIcons name="search" size={24} color={ theme === 'light' ?Colors.dark.icon: Colors.light.icon }  style={{width:30}}/>
                 <ThemedText style={{color:Colors[theme].text}}>Search</ThemedText>
                </ThemedView> } */}
                {/* {setShowTabBar(false)} */}
                {/* <ThemedView style={{display:"flex",flexDirection:"row"}}> */}
              <ThemedView style={style.innercontainer}>
                <View>
                  <ImageCard
                    onpress={() => {
                      setSelectedWallpaper(first);
                      setSelecteduser(pairedUsers[0] || null); // Set the first user
                      setShowTabBar(false),
                      OnScroll?.({ yoffset: vertical, value: true })
                      setShowSearchBar(false)
                    }}
                    wallpaper={first}
                  />
                </View>
              </ThemedView>
              <ThemedView style={style.innercontainer}>
                {second && (
                  <View>
                    <ImageCard
                      onpress={() => {
                        setSelectedWallpaper(second);
                        setSelecteduser(pairedUsers[1] || null); // Set the second user
                        setShowTabBar(false)
                        OnScroll?.({ yoffset: vertical, value: true })
                        setShowSearchBar(false)


                      }}
                      wallpaper={second}
                    />
                  </View>
                )}
              </ThemedView>
              {/* </ThemedView> */}
            </ThemedView>
          );
        }}
        keyExtractor={(item) => item[0].name }
        // {setShowTabBar(false)}
      />
      {selectedWallpaper && selecteduser  && (
        <Downlode_index

          Onclose={() => {
            setSelectedWallpaper(null);
            setSelecteduser(null);
            setShowTabBar(true);
            OnScroll?.({ yoffset: vertical, value: false })


          }}

          wallpaper={selectedWallpaper}
          Userrr={selecteduser}
        />
      )

      }
    </>
  );

}

// export function Spliteview_for(
//     { Wallpapersss, OnScroll }: {
//         Wallpapersss: wallpaper[];
//         OnScroll?: (yoffset: number) => void;
//     }
// ) {

//     const [selectedWallpaper, setSelectedWallpaper] = useState<null | wallpaper>(null);
//     return <>


//      <FlatList

//                 onScroll={(e) => {

//                 let vertical= e.nativeEvent.contentOffset.y;

//                 OnScroll?.(vertical);

//                 }}
//             scrollEventThrottle={16}
//             data={Wallpapersss.filter((_, index) => index % 2 === 0).map((_, index) => [Wallpapersss[index], Wallpapersss[index + 1]])}
//             renderItem={({ item: [first, second] }) =>
//                 <ThemedView style={style.container}>
//                     <ThemedView style={style.innercontainer}>
//                         <View >
//                             <ImageCard onpress={() => setSelectedWallpaper(first)} wallpaper={first} />
//                         </View>
//                     </ThemedView>
//                     <ThemedView style={style.innercontainer}>
//                         {second && <View>

//                             <ImageCard onpress={() => setSelectedWallpaper(second)} wallpaper={second} />
//                         </View>}

//                     </ThemedView>

//                 </ThemedView>

//             }

//             keyExtractor={item => item[0].name}
//         />
//         {selectedWallpaper && <Downlode_index Onclose={() => setSelectedWallpaper(null)} wallpaper={selectedWallpaper} />}
//     </>
// }


















const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      // paddingTo p:,
      flexDirection:"row",
      // marginTop:20
      // borderTopLeftRadius:500,
      // borderRadius:20,
      // zIndex:10
      // backgroundColor: "red", 
      // display: "flex",
      // justifyContent: "space-evenly",
      // width: "100%",
      // paddingRight:10,
      // height: "100%",

      // position:"absolute"
    },
    innercontainer: {
      flex: 1,
      display: "flex",
      // flexDirection: "row",
      width: "100%",
      height: "100%",
      // paddingRight:-60,
      // position:"absolute",
      // top:0,
      // left:0,
      paddingLeft: 10,
      paddingRight: 10,
      // borderTopLeftRadius:50
      // backgroundColor:"yellow"
    }
    ,
    innercontainer02: {
      flex: 1,
      // display:"flex",
      // flexDirection:"row",
      // width:"100%",
      // height: "100%",
      // paddingRight:-60,
      // position:"absolute",
      // top:0,
      // left:0,
      paddingLeft: 15,
      paddingRight: 15, margin: 0,
      // backgroundColor:"black"
    }
  }
)


