import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, useColorScheme, Pressable, Dimensions, Platform, Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { wallpaper } from "@/hooks/useWallpaper";
import { Usersss } from "@/hooks/Users";

import { Colors } from '@/constants/Colors';
import { ThemedView } from './ThemedView';
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, SplashScreen } from 'expo-router';
import * as Font from "expo-font";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemedText } from './ThemedText';
import wallpaper_User from '@/app/(NoBottom)/Wallpaper_USer';

const height = Dimensions.get("screen").height;
const Width = Dimensions.get("window").width;

export function Downlode_index(
  { Onclose, wallpaper
    , Userrr
  }: {
    Onclose: () => void, wallpaper: wallpaper
      , Userrr: Usersss
  }) {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const theme = useColorScheme() ?? 'light';
  const [heart, SetHeart] = useState<"heart-o" | "heart">("heart-o");
  
  // ref
  // const Users = Usersss();
  const D_By_Image = async (imageUrl: string) => {
  try {
    // 1️⃣ Request Permissions
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) {
      Alert.alert("Permission Denied", "Please allow access to save images.");
      return;
    }

    // 2️⃣ Define File Path
    const fileName = `${Date.now()}.jpg`;
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;

    // 3️⃣ Download the Image
    const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);
    console.log("Downloaded Image Path:", uri);

    // 4️⃣ Save to Media Library
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync("Downloaded Images", asset, false);
    
    Alert.alert("✅ Success!", "Image saved to your gallery.");
  } catch (error) {
    console.error("Download Error:", error);
    Alert.alert("❌ Error", "Failed to download image.");
  }
};

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  let [fontsLoaded] = Font.useFonts({
    'Round': require('../app/assets/fonts/Bold.ttf'),
    'BR_F': require('../app/assets/fonts/BR Firma Regular.otf'),
    'KO': require('../app/assets/fonts/Kinetica-Outlined.otf')
  })
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

// const[userstate,setuseer]=useState(false);

// const link = `/profile?user=${encodeURIComponent(JSON.stringify(Userrr))}`;

const encodedUser = encodeURIComponent(JSON.stringify(Userrr));
console.log("Links",encodedUser);  


  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        handleIndicatorStyle={styles.headerIndicator}
        handleStyle={styles.aaa}
        onClose={Onclose}
        snapPoints={['100%']}
        style={{ backgroundColor: "pink" }}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose
      >
        <BottomSheetView style={styles.contentContainer}>
          <Pressable style={{
            height: "58%", backgroundColor: "red", width: "100%", borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }} onPress={() => D_By_Image(wallpaper.uri )}>
            <Image
              style={styles.image} // Set specific dimensions
              source={{ uri: wallpaper.uri }}

            />
          </Pressable>

          <View style={styles.Icon}>
            {/* <Entypo name="cross" size={24} color="black" /> */}
            <View style={{
              borderRadius: 20, backgroundColor: theme === 'light' ? Colors.trans.icon : Colors.trans.icon, width: 35, height: 35, display: "flex", alignItems: "center"
              , justifyContent: "center", marginLeft: "3%"
            }}>
              <Entypo onPress={Onclose}
                name={'cross'}
                size={30}
                color={theme === 'light' ? Colors.dark.icon : Colors.dark.icon} />
            </View>
            <View style={styles.Innericon}>
              <View style={{
                borderRadius: 20, backgroundColor: theme === 'light' ? Colors.trans.icon : Colors.trans.icon, width: 35, height: 35, display: "flex", alignItems: "center"
                , justifyContent: "center"
              }}
              >

                <FontAwesome name={heart}

                  size={20}
                  color={theme === 'light' ? Colors.dark.icon : Colors.dark.icon}
                  onPress={() => SetHeart((p: string) => (p === "heart" ? "heart-o" : "heart"))
                  }

                />

              </View>
              <View style={{
                borderRadius: 20, backgroundColor: theme === 'light' ? Colors.trans.icon : Colors.trans.icon, width: 35, height: 35, display: "flex", alignItems: "center"
                , justifyContent: "center"
              }}>
                <MaterialCommunityIcons name="share-outline" size={30}
                  color={theme === 'light' ? Colors.dark.icon : Colors.dark.icon}
                />
              </View>

            </View>
          </View>



          <ThemedView style={{ flex: 1, width: "100%", alignItems: "center" }}>
            {/* Here We Used This Themed View For Making Accurate clour Themed */}
            <Text style={{
              textAlign: "center",
              color: theme === 'light' ? Colors.dark.icon : Colors.light.icon,
              fontWeight: "600",
              fontSize: 25,
              paddingTop: 10,
              fontFamily: "Round",

              // backgroundColor:"red"
            }}>{wallpaper.name}</Text>
            <DownlodeButton uri={wallpaper.uri} />
            <ThemedView style={styles.Profile_C} >
              <Link href={`/(NoBottom)/Wallpaper_USer?user=${encodedUser}`} style={{ width: 55 }} >
                <View style={{ width: 55 }} >
                  <Image source={{ uri: Userrr.image }} style={{ height: 55, width: 55, borderRadius: 38 }}></Image>
                  <AntDesign name="pluscircle" size={20} color="red" style={{ position: "absolute", top: "55%", left: "60%" }} />
                  {/* <AntDesign name="plus" size={18} color="white"  style={{position:"absolute",top:"55%",left:"60%"}}/> */}
                  <Entypo name="plus" size={20} color="white" style={{ position: "absolute", top: "55%", left: "60%" }} />
                </View>
              </Link>
              <Link href={`/(NoBottom)/Wallpaper_USer?user=${encodedUser}`} style={{ width: "70%", paddingLeft: "5%", paddingTop: "8%" }} >
                <Text style={{ fontFamily: "Round", color: theme == "light" ? Colors.dark.icon : Colors.light.icon, width: "80%" }}>{Userrr.name}</Text>
              </Link>
              <ThemedView style={{  position: "absolute", top: "45%", width: "80%", height: "60%" ,flexDirection:"column"}}>
                    <ThemedView style={{flexDirection:"row",backgroundColor:theme === 'light' ? Colors.light.background : Colors.dark.background,alignItems:"center"}}>
                         <AntDesign name="codepen-circle" size={18} color={theme === 'light' ? Colors.dark.icon : Colors.light.icon}  style={{width:"10%"}}/>
                        <ThemedText style={{ color: Colors[theme].text, width: "100%", fontFamily: "BR_F", fontSize: 14, fontWeight: "600" ,paddingLeft:"2%"}}>{Userrr.type}</ThemedText>
                    
                    </ThemedView>
                    <ThemedView style={{flexDirection:"row",backgroundColor:theme === 'light' ? Colors.light.background : Colors.dark.background,alignItems:"center"}}>
                      
                        <MaterialCommunityIcons name="information-outline" size={18} color={theme === 'light' ? Colors.dark.icon : Colors.light.icon}  style={{width:"10%"}} />
                        < ThemedText style={{ color: Colors[theme].text, width: "100%", fontFamily: "BR_F", fontSize: 14, fontWeight: "600" ,paddingLeft:"2%" }}>Full-Res {Userrr.Full_R}</ThemedText>
                    
                    </ThemedView>
                    <ThemedView style={{flexDirection:"row",backgroundColor:theme === 'light' ? Colors.light.background : Colors.dark.background,alignItems:"center"}}>
                        
                         <MaterialCommunityIcons name="information-outline" size={18} color={theme === 'light' ? Colors.dark.icon : Colors.light.icon}  style={{width:"10%"}} />
                         <ThemedText style={{ color: Colors[theme].text, width: "100%", fontFamily: "BR_F", fontSize: 14, fontWeight: "600" ,paddingLeft:"2%" }}>HD - 1080 x 1920</ThemedText>
                    
                    </ThemedView>

              </ThemedView>
            </ThemedView>
          </ThemedView>

        </BottomSheetView>

      </BottomSheet>
      {/* {userstate && (wallpaper_User(Userrr))} */}
    </GestureHandlerRootView>
  );
};

// export function Downlode_for(
//   { Onclose, wallpaper }: { Onclose: () => void, wallpaper: wallpaper }) {

//   // ref

//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);
//   const theme = useColorScheme() ?? 'light';

//   // renders
//   return (
//     <GestureHandlerRootView style={styles.container_for}>
//       <BottomSheet
//         handleIndicatorStyle={styles.headerIndicator}
//         handleStyle={styles.aaa}
//         onClose={Onclose}
//         snapPoints={['100%']}

//         ref={bottomSheetRef}
//         onChange={handleSheetChanges}
//         enablePanDownToClose
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <Image
//             style={styles.image} // Set specific dimensions
//             source={{ uri: wallpaper.uri }}
//           />
//           <View style={styles.Icon}>
//             <Ionicons
//               onPress={Onclose}
//               name={'close'}
//               size={35}
//               color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
//             />
//             <View style={styles.Innericon}>
//               <Ionicons

//                 name={'heart'}
//                 size={35}
//                 color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
//               />
//               <Ionicons

//                 name={'share'}
//                 size={35}
//                 color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
//               />
//             </View>
//           </View>
//           <ThemedView style={{ flex: 1, width: "100%", alignItems: "center" }}>
//             {/* Here We Used This Themed View For Making Accurate clour Themed */}
//             <Text style={{
//               textAlign: "center",
//               color: theme === 'light' ? Colors.dark.icon : Colors.light.icon,
//               fontWeight: "600",
//               fontSize: 35,
//               padding: 10
//             }}>{wallpaper.name}</Text>
//             <DownlodeButton uri={wallpaper.uri} />
//           </ThemedView>
//         </BottomSheetView>

//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

function DownlodeButton({ uri }: { uri: string }) {
  const theme = useColorScheme() ?? 'light';
  return <Pressable
    style={
      {
        backgroundColor: theme === 'light' ? Colors.dark.icon : Colors.light.icon,
        width: "80%",
        borderRadius: 10,
        alignItems: "center",
        // justifyContent:"space-between",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10
        , marginTop: 15,
        borderColor: theme === 'light' ? Colors.light.icon : Colors.dark.icon,
        borderWidth: 1,

      }
    }
    onPress={async () => {
      let date = new Date().getTime(); // Correctly call getTime
      let fileUri = FileSystem.documentDirectory + `${date}.jpg`; // Use fileUri for consistency

      try {
        // Attempt to download the file
        const response = await FileSystem.downloadAsync(uri, fileUri);
        console.log("Finished downloading to ", response.uri);

        // Request permissions for media library
        const permissionResponse = await MediaLibrary.requestPermissionsAsync();

        // Check if permission is granted
        if (permissionResponse.granted) {
          // Create the asset in the media library
          await MediaLibrary.createAssetAsync(response.uri); // Use the downloaded URI
          alert("Image Saved");
        } else {
          console.error("Permission Not Granted");
          alert("Permission to access media library was not granted.");
        }
      } catch (error) {
        console.error("FS Error", error);
        alert("Failed to download image: " + error); // Notify user of the error
      }
    }}


  >

    <MaterialIcons style={{ paddingLeft: 30 }}
      name={'wallpaper'}
      size={30}
      color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />

    <Text style={{
      color: theme === 'light' ? Colors.light.icon : Colors.dark.icon,

      fontSize: 18,
      alignItems: "center",
      paddingLeft: 20,
      fontWeight: "500",
      fontFamily: "Round",

    }}>Get Wallpaper</Text>
  </Pressable>
}
const styles = StyleSheet.create({
  
  // fullScreenContainer: {
  //   // Ensure it stays above other components
  // },
  Icon: {
    width: "100%",
    position: "absolute",
    top: "6%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    // colore:"black"

  },
  Innericon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
    marginRight: "5%",

    alignItems: "center",
    // paddingLeft:"2%",
    // backgroundColor:"red"
  },
  aaa: {
    padding: 0,
    marginBottom: 0,

  },
  container: {
    // position: "absolute",
    // top: 0,
    paddingRight: 0,
    marginRight: 0,
    width: Width,
    height: height,
    // backgroundColor:"green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    ...StyleSheet.absoluteFillObject, // Makes the container cover the full screen
    zIndex: 100,
    // backgroundColor:"red"
  },
  container_for: {
    position: "absolute",
    top: -20,
    zIndex: 700,
    paddingRight: 0,
    marginRight: 0,
    width: Width,
    height: height,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    // backgroundColor:"red"
  },
  contentContainer: {
    alignItems: 'center',
    width: Width,
    height: height,
    paddingRight: 0,
    marginRight: 0,
    marginBottom: 0,
    zIndex: 5555,
    backgroundColor: "red"
  },
  headerIndicator: { height: 0, backgroundColor: "green" },

  text1: {

  },
  image: {
    height: "100%",
    // aspectRatio: 1,
    width: "100%",

  },
  Profile_C: {
    height: "45%",
    width: "80%",
    // backgroundColor: "orange",
    position: "absolute",
    left: "10%",
    top: "36%",
    display: "flex",
    // alignItems:"flex-start",
    flexDirection: "row",
    // justifyContent:"flex-start"
  }
});




