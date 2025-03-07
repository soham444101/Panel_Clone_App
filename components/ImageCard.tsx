import { UseWallpaper, wallpaper } from "@/hooks/useWallpaper"
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, Text, Button, Image, StyleSheet, useColorScheme, Pressable, } from "react-native";
import { Colors } from '@/constants/Colors';
import { Usersss } from "@/hooks/Users";
import { useState } from "react";


export function ImageCard({ wallpaper, onpress }: { wallpaper: wallpaper, onpress: () => void }) {
    const theme = useColorScheme() ?? 'light';
    const [heart, SetHeart] = useState<"heart-o" | "heart">("heart-o");
    const [hearts, SetHearts] = useState<"red"|"white">("white");

    return <Pressable onPress={onpress}>
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Image source={{ uri: wallpaper.uri }} style={style.image} />
            <View style={style.cantainer}>

                <Text style={style.text}>{wallpaper.name}</Text>

                <View style={style.Iconview}>
                    <FontAwesome name={heart}

                        size={18}
                        color={hearts}
                        onPress={() =>{ SetHeart((p: string) => (p === "heart" ? "heart-o" : "heart")), SetHearts( (p:string) => (p==="white" ? "red":"white"))}
                        }

                    />
                </View>
            </View>
        </View>
    </Pressable>
}
const style = StyleSheet.create(
    {
        Iconview: {
            display: "flex",
            justifyContent: "center",
            paddingRight: 12
        },
        image: {
            flex: 1,
            height: 200,
            // aspectRatio:1,
            marginTop: 10,
            borderRadius: 20,

        },
        text: {
            // flex: 1,
            fontWeight: "500",
            textAlign: "center",
            color: "white",
            paddingLeft: 10,
            fontSize: 15,
            alignSelf:"center"
            ,fontFamily:"BR_F",
            
        }
        , cantainer: {
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            bottom: 0,
            width: "100%",
            height:"20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        }
    }
)