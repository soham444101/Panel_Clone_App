import { View, Text, Button, StyleSheet, Pressable, useColorScheme, Appearance, Dimensions } from "react-native";
import { Link, Slot, SplashScreen, useNavigation } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from '@/constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
// import Apploading from "expo-app-loading";
import { ScrollView } from "react-native-gesture-handler";
import GoogleIcon from '../assets/logo/google-icon-logo-svgrepo-com.svg';
// import Svg, { Path } from 'react-native-svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get("window").height;

export default function account() {
    const theme = useColorScheme() ?? 'light';
    let [fontsLoaded] = Font.useFonts({
        'Round': require('../assets/fonts/Bold.ttf'),
        'BR_F': require('../assets/fonts/BR Firma Regular.otf'),
        'KO': require('../assets/fonts/Kinetica-Outlined.otf')
    })
    if (!fontsLoaded) {
        return null;
    }

    useEffect(() => {
    
         SplashScreen.hideAsync();
        
    }, []);
    // SplashScreen.hideAsync();
    const [showTabBar, setShowTabBar] = useState(true);
    const navigation = useNavigation();
    // Update the tabBarStyle dynamically
    useEffect(() => {
        if (navigation?.setOptions) {
            navigation.setOptions({
                tabBarStyle: {
                    display: showTabBar ? "flex" : "none",
                    backgroundColor: Colors[theme].background,
                    height: "10%",
                }
            });
        }
    }, [showTabBar, theme, navigation]);

    return <View style={{ flex: 1, backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background, paddingTop: "14%" }}>
        <View style={{ width: width, backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background }}>
            <Headers />
        </View>
        <ScrollView style={[Styles.maincontainer, { backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background }]} onScroll={(e) => {
            let vertical = e.nativeEvent.contentOffset.y;
            setShowTabBar((vertical <= 100)); // Hide tab bar if user scrolls down

        }
        }>

            {/* Sing In PAge View/div */}
            <ThemedView style={[Styles.SinginSpace, {
                backgroundColor: theme === 'light' ? Colors.light.background : Colors.LightDark.background,
            }]}>

                <SignIn />
            </ThemedView>
            {/* Theme And Seeting View/Div */}
            <ThemedView style={Styles.SinginSpace2}>

                <TheamWholeBox />
            </ThemedView>

            {/* <ThemedView>
            <Icons />
        </ThemedView> */}

            {/* ThemedView For The about page */}

            <About />

        </ScrollView>
    </View>
}

function Headers() {
    const theme = useColorScheme() ?? 'light';

    return <>
        <ThemedView style={{ position: "static", paddingLeft: "3%", backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background }}>
            <ThemedText style={Styles.headerTop}>
                Panels
            </ThemedText>
            <ThemedText style={Styles.headerBottom}>
                Sign in save your data
            </ThemedText>
        </ThemedView>

    </>
}
function SignIn() {
    const theme = useColorScheme() ?? 'light';
    const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);
    
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com&scope=profile%20email&redirect_uri=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Fgoogle&state=%7B"sid"%3A1%2C"st"%3A"59%3A3%3A1b8%2C16%3A783673c49f6e9fbb%2C10%3A1732513367%2C16%3Ab182d5e6d3a98403%2C8821dcb8458267986d2aa35ac4ebf80d0aa4b7172a5b3363083f2aefd88dfd6d"%2C"cid"%3A"717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com"%2C"k"%3A"Google"%2C"ses"%3A"5451acbf752a43fb9647b1945338fdcc"%7D&response_type=code&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow');
    setResult(result);
};
    return <Pressable

        style={
            {
                backgroundColor: theme === 'light' ? Colors.light.icon : Colors.Bgdark.background,
                // backgroundColor:"red",
                width: "90%",
                height: "45%",
                borderRadius: 10,
                alignItems: "center",
                // justifyContent:"space-between",
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                // marginTop: 15,
                // marginHorizontal: 10,

                borderColor: theme === 'light' ? Colors.dark.icon : Colors.light.icon,
                borderWidth: 2,
            }
        }  onPress={_handlePressButtonAsync}  >

        <GoogleIcon width="10%" height="80%" style={{ marginLeft: "10%", marginRight: "30%" }} />

        {/* <Svg width="10%" height="80%" viewBox="0 0 16 16" style={{ marginLeft: '10%', marginRight: '30%' }}>
            <Path
                fill="currentColor"
                d="M7.428 0h1.142c.57 0 1.043.47 1.043 1.043v13.914c0 .573-.474 1.043-1.043 1.043H7.428c-.57 0-1.043-.47-1.043-1.043V1.043C6.385.47 6.858 0 7.428 0z"
            />
        </Svg> */}

        <Text style={{
            color: theme === 'light' ? Colors.dark.icon : Colors.light.icon,
            fontSize: 16,
            fontWeight: "900",
            letterSpacing: 0.5,
            alignItems: "center",
            // paddingLeft: 0,
            // backgroundColor:"yellow",
            fontFamily: "KO",


        }}>Sign In</Text>
    </Pressable>
}
// const [themeColour,SetthemeColour]=useState(null);
function TheamWholeBox() {
    return <>
        <ThemedText style={{
            fontSize: 25,
            fontWeight: "700",
            letterSpacing: 0.5, paddingLeft: "7.5%", paddingTop: 10, fontFamily: "BR_F"
        }}>
            Settings
        </ThemedText>

        <ThemedText style={{
            opacity: 0.9, paddingLeft: "7.5%", paddingTop: 9, fontSize: 14,
            fontWeight: "500",
            fontFamily: 'BR_F',
        }}>Theme</ThemedText>

        <ThemedView style={{ display: "flex", flexDirection: "row", paddingLeft: "7.5%", paddingTop: "6%", paddingRight: "5%", width: "100%", height: "52%" }}>
            <TheamButton title="System" selectd={false} Colourschema="dark" ></TheamButton>
            <TheamButton title="Light" selectd={false} Colourschema="light"></TheamButton>
            <TheamButton title="Dark" selectd={false} Colourschema="dark"></TheamButton>

            {/* Thsi Is A Function TheButton */}
        </ThemedView>
    </>
}
function TheamButton({ selectd, title, Colourschema }: { selectd: boolean, title: string, Colourschema: undefined | "light" | "dark" | null }) {
    const systemTheme = useColorScheme() ?? "light"; // Get system theme
    const [theme, setTheme] = useState(systemTheme);

    const ChangeTheme = (colour: "light" | "dark" | null | undefined) => {
        const newTheme = colour ?? systemTheme;
        setTheme(newTheme);
        Appearance.setColorScheme(newTheme);
    };

    // Determine the button background color
    const isOppositeTheme = theme === "light" ? "dark" : "light";
    const backgroundColor = selectd
        ? Colors[theme].background : Colors[isOppositeTheme].background // Opposite theme color for selected
        ;

    const textColor = Colors[isOppositeTheme].text;

    return <>
        <Pressable onPress={() => { ChangeTheme(Colourschema) }} style={{ height: "100%", borderRadius: 10, borderColor: "grey", borderWidth: 1, marginRight: 0, backgroundColor: backgroundColor }}  >
            <Text style={{
                flex: 0.5, textAlign: "center", fontSize: 19, fontWeight: "700", letterSpacing: 0, justifyContent: "center", paddingVertical: "7%", paddingHorizontal: "8%", color: textColor,
            }}>{title}</Text>
        </Pressable>
    </>
}
function About() {
    const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);

    // For Link Open In Browser
    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://expo.dev');
        setResult(result);
    };
    const _TS = async () => {
        let result = await WebBrowser.openBrowserAsync('https://expo.dev');
        setResult(result);
    };

    return <>
        <ThemedView style={{ marginTop: "20%", paddingLeft: "3%" }}>
            <ThemedText style={Styles.bigtitle}>About</ThemedText>
            <ThemedView style={Styles.AboutBox}>
                <Link href="/(NoBottom)/account_info" asChild>
                    <Pressable style={{ paddingTop: "10%" }} >
                        <ThemedText style={{ fontSize: 16, fontWeight: "600", paddingLeft: "7.5%", fontFamily: 'BR_F' }}>Account</ThemedText>
                    </Pressable>
                </Link>
                <Pressable style={{ paddingTop: "10%" }} onPress={_handlePressButtonAsync}  >
                    <ThemedText style={{ fontSize: 16, fontWeight: "600", paddingLeft: "7.5%", fontFamily: 'BR_F' }}>Private Policy</ThemedText>
                    {/* <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} /> */}
                </Pressable>
                <Pressable style={{ paddingTop: "10%" }} onPress={_TS}>
                    <ThemedText style={{ fontSize: 16, fontWeight: "600", paddingLeft: "7.5%", fontFamily: 'BR_F' }}>Terms & Services</ThemedText>
                </Pressable>

                <Link href="/(NoBottom)/Licenses" asChild>
                    <Pressable style={{ paddingTop: "10%" }}>
                        <ThemedText style={{ fontSize: 16, fontWeight: "600", paddingLeft: "7.5%", fontFamily: 'BR_F' }}>Licenses</ThemedText>
                    </Pressable>
                </Link>
                <Pressable style={{ paddingTop: "10%" }} >

                    <ThemedView style={{ display: "flex", flexDirection: "column", padding: 0 }}>
                        <ThemedText style={{ fontSize: 16, fontWeight: "600", paddingLeft: "7.5%", fontFamily: 'BR_F' }}>Version</ThemedText>
                        <ThemedText style={{ fontSize: 10, fontWeight: "600", paddingLeft: "8%", position: "absolute", top: 20 }}>1.2.3</ThemedText>
                    </ThemedView>
                </Pressable>
            </ThemedView>


        </ThemedView>
    </>
}
// function Icons() {
//     return <>
//         <ThemedView>
//             <ThemedText>App  Icons</ThemedText>
//             <ScrollView horizontal={true} style={{ flex: 1 }}>
//              <FileList>

//              </FileList>
//             </ScrollView>
//         </ThemedView>
//     </>
// }





const Styles = StyleSheet.create(
    {

        headerTop: {

            paddingLeft: "7.5%",
            paddingTop: 20,
            fontFamily: "Round",
            fontSize: 32,
            fontWeight: "900",
            letterSpacing: 0.5,
            opacity: 1
            // letterSpacing:2,
            // width:50    
            // backgroundColor:"#f2f0f5"
        },
        headerBottom: {
            fontSize: 12,
            fontWeight: "300",
            paddingLeft: "7.5%",
            paddingTop: "2%",
            fontFamily: 'BR_F',
            opacity: 0.7
        },
        SinginSpace: {
            width: "90%"
            ,
            height: "15%",
            marginLeft: "5%",
            marginRight: "5%",
            // borderWidth:10,
            borderColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
            , borderRadius: 5,
            marginTop: "10%",
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 5,
            backgroundColor: "red",
        },
        SinginSpace2: {
            width: "100%",
            height: "20%",
            marginTop: "8%",
            marginBottom: "0%",
            paddingLeft: "3%"
        },
        maincontainer: {
            height: height * 1.5, // Allow scrollview to take up the full screen height
            display: "flex",
            flexDirection: 'column',
            paddingBottom: 10,
            backgroundColor: "yellow"
        },
        bigtitle: {
            fontSize: 22, fontWeight: "700", paddingLeft: "7.5%"
        }
        ,
        AboutBox: {
            display: "flex",
            flexDirection: "column",
            // backgroundColor:"yellow",
            paddingBottom: "60%"
        }
    }

)