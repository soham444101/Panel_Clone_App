import { View, Text, StyleSheet, Image, useColorScheme, Pressable, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '../../components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Usersss } from '@/hooks/Users';
import { Link, useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UseLiked, UseSuggested } from '@/hooks/useWallpaper';
import { Spliteview_index } from '@/components/SpliteView';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';

const width = Dimensions.get('screen').width;
const height = Dimensions.get("screen").height;


export default function wallpaper_User() {
    const searchParams = useSearchParams();
    const user = searchParams?.get('user');
    const Tab = createMaterialTopTabNavigator();
    const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);
    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://x.com/i/flow/login');
        setResult(result);
    };

    // Check if the user param exists, then decode it
    const parsedUser = user ? JSON.parse(decodeURIComponent(user)) : 0;
    console.log("dddd", parsedUser)
    const theme = useColorScheme() ?? 'light';
    // console.log("USers",user)
    return <>
        <SafeAreaView style={{ backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background, flex: 1, height: height, display: "flex" }}>

            {/* <ThemedView style={{ alignItems: "center", position: "absolute", top: 0, left: 0, width: "50%", height: height / 4.5, marginTop: "10%", justifyContent: "center", marginHorizontal: "25%" }}> */}


            <Link href={"/(Tabs)/account"} style={{ alignSelf: "center", position: "relative", backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background, flexDirection: "column", display: "flex" }}>
                <Image source={{ uri: parsedUser.image }} style={{ width: 80, height: 80, marginTop: "0%", borderRadius: 60, backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background }} />
            </Link>
            <ThemedView style={{ width: width, flexDirection: "column", alignItems: "center", backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background }}>
                <Text style={{ fontFamily: "Round", color: Colors[theme].text, paddingVertical: "6%" }}>{parsedUser.name}</Text>
                <ThemedView style={{ width: "30%", flexDirection: "row", display: "flex", alignContent: "center", justifyContent: "space-evenly", backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background, paddingBottom: "4%" }}>

                    <AntDesign name="instagram" size={24} color={theme == "light" ? Colors.dark.icon : Colors.light.icon} style={{ alignSelf: "center" }} />                    
                    <Pressable onPress={_handlePressButtonAsync}><FontAwesome6 name="x-twitter" size={24} color={theme == "light" ? Colors.dark.icon : Colors.light.icon} style={{ alignSelf: "center", width: 24 }} /></Pressable>
                </ThemedView>
            </ThemedView>

            {/* </ThemedView> */}

            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        fontFamily: "BR_F",
                        fontSize: 15,
                        // backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background,
                    },
                    tabBarInactiveTintColor: Colors[theme].text,
                    tabBarActiveTintColor: Colors[theme].text,

                    // This applies styles to the entire tab bar
                    tabBarStyle: {
                        backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background,
                        height: 50,  // Fixed height for the tab bar
                        display: 'flex',
                        // position: 'relative',
                        borderColor: 'red',
                        borderWidth: 5,
                    },

                    tabBarIndicatorStyle: {
                        backgroundColor: Colors[theme].indicator,
                        height: 5,
                        // width: "25%",
                        // marginLeft: 40,
                    },
                }}
            >
                <Tab.Screen name="Single" component={Suggested} />
                <Tab.Screen name="Collections" component={Likes} />
            </Tab.Navigator>

        </SafeAreaView>
    </>
    function Likes() {
        const wallpapers = UseLiked();
        const theme = useColorScheme() ?? 'light';
        const userss = Usersss();

        return <>

            <ThemedView style={{ flex: 1, backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background }}>

                <Spliteview_index


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

        return <ThemedView style={{ flex: 1, backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background }}>
            <Spliteview_index
                Wallpapersss={wallpapers}
                users={userss}
            />

        </ThemedView>
    }

}




// If you don't want to see this message, you can disable the `strict` mode. Refer to:
// https://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.
//  (NOBRIDGE) LOG  USers {"segment": "(NoBottom)/Wallpaper_USer"}