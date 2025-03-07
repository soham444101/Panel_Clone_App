import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList, useColorScheme, Dimensions, StatusBar } from "react-native";
import { UseWallpaper, wallpaper } from "@/hooks/useWallpaper"
import { Usersss } from "@/hooks/Users"
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";
import { Spliteview_index } from "@/components/SpliteView";
import Carousel from 'react-native-reanimated-carousel';
import { UseCarsousel } from "@/hooks/Carousel";
import { LinearGradient } from "expo-linear-gradient";
import { Pagination } from "@/components/Pagination";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

// import { StatusBar } from "expo-status-bar";

//   / This is the default configuration



configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: true, // Reanimated runs in strict mode by default
});
const width = Dimensions.get('screen').width;
const height = Dimensions.get("screen").height;
const Top_Height = height / 2.25


export default function Explore() {
  const user = Usersss();
  const theme = useColorScheme() ?? 'light';

  const wallpapers = UseWallpaper();
  // const isDarkMode = useColorScheme() ==='dark';
  const CarsolImage = UseCarsousel();

  const [pagination, setpagination] = useState(0);
  const [yoffset, setScrollY] = useState(0);
  const fadeTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      yoffset,
      [0, Top_Height * 0.5, Top_Height * 0.65], // Adjust the range to control when the fade occurs
      [1, 0.8, 0] // Fade from fully visible (1) to half visible (0.5) to invisible (0)
    );
    return { opacity };
  });

  const [showTabBar, setShowTabBar] = useState(true);
  const [showabsolute, setabsolute] = useState<"absolute" | "relative">("relative");
  const navigation = useNavigation();
  // Update the tabBarStyle dynamically
  React.useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        display: showTabBar ? "flex" : "none",
        backgroundColor: Colors[theme].background,
        height: "10%"

      }
    });
  }, [showTabBar, theme]);



  return (
    <>
      <View style={{
        height: height, position: "absolute", backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background
      }} >
        <StatusBar
          translucent={true}           // Enables transparency
          backgroundColor="transparent" // Transparent background
          barStyle="light-content"      // Light icons/text for visibility
        />
        {/* <Animated.ScrollView  scrollEventThrottle={16} style={[{width:width ,height:525}]}> */}
        <Animated.View style={[{ width: width, height: Top_Height - yoffset, paddingTop: 0, paddingBottom: 0, marginBottom: 0, backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background, }]} >
          <Carousel
            width={width}
            height={Top_Height - yoffset}
            loop
            // style={}}
            autoPlay={true}
            autoPlayInterval={3000}
            data={CarsolImage}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setpagination(index)}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
                  backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background,
                  marginLeft: 0,
                  paddingLeft: 0,
                  width: width,
                }}

              >

                <Image source={{ uri: CarsolImage[index].image }} style={{ height: Top_Height, width: width, marginHorizontal: 0, zIndex: 0 }} />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,2)']}
                  style={[{ height: Top_Height }, style.button]}>
                  <Animated.Text style={[{ height: Top_Height + yoffset }, style.text, fadeTextStyle]}>{CarsolImage[index].name}</Animated.Text>
                </LinearGradient>
              </View>
            )}
          />
          <Animated.Text style={[style.pagination]}>{pagination !== undefined && <Pagination currentIndex={pagination} totalItems={CarsolImage.length} Yoffset={yoffset} />}</Animated.Text>
        </Animated.View>


        <Spliteview_index

          OnScroll={
            ({ yoffset, value }) => {
              setScrollY(yoffset);
              setShowTabBar((yoffset <= 100)); // Hide tab bar if user scrolls down
              setabsolute(value ? "absolute" : "relative")

            }
          } Wallpapersss={wallpapers}
          users={user}
        />


      </View>
    </>
  );
}



const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-evenly"
      , paddingRight: 10,
      width: "100%"

    },
    innercontainer: {
      flex: 1,
      paddingLeft: 15
    },

    button: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 2,
      width: width,
      height: Top_Height,
      zIndex: 0,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",


    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 30,
      fontWeight: "700",
      color: "white",
      position: "absolute",
      paddingTop: "70%",


    },
    pagination: {
      position: "absolute",
      top: "90%",
      alignSelf: 'center',
      // backgroundColor:"red",

    }
  }
)






























{/* <ParallaxScrollView
    headerBackgroundColor={{ dark: "black", light: "white" }}
    headerImage={
        <Image
            style={{ flex: 1 }} // Set specific dimensions
            source={{ uri: wallpapers[0]?.uri ?? "" }}
        // Optional: Change how the image is resized
        />
    }
    >       */}











// <ThemedView style={style.container}>
// <ThemedView style={style.innercontainer}>

//     <FlatList
//         data={wallpapers.}
//         renderItem={({item}) => (
//             <ImageCard onpress={() => setSelectedWallpaper(item)} wallpaper={item} />
//         )}

//         keyExtractor={item => item.name}
//     />
// </ThemedView>
// <ThemedView style={style.innercontainer} >

// <FlatList
//         data={wallpapers.filter((_,index)=> index%2 === 1)}
//         renderItem={({item}) => <ImageCard onpress={() => setSelectedWallpaper(item)} wallpaper={item} />}
//         keyExtractor={item => item.name}
//     />
// </ThemedView>
// </ThemedView>





// {/* <View style={{ flex: 1 }}>
// <Button
//     title="Open Bottom Sheet"
//     onPress={() => {
//         setPictureOpen(true);
//     }}
// />
// {pictureOpen && <Downlode Onclose={() => setPictureOpen(false)} />}
// </View> */}





{/* <View 
            style={{position:showabsolute,height:height,width:width}} 
            > */}
{/* <ThemedView style={{width:width,display:"flex",height:"auto",position:"relative"}}>
              <MaterialIcons name="search" size={24} color={ theme === 'light' ?Colors.dark.icon: Colors.light.icon } />
              <ThemedText>Search</ThemedText>
              </ThemedView>  */}