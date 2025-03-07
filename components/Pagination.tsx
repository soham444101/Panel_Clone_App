import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";
import { View, Text, Button, Image, StyleSheet, FlatList, useColorScheme, Dimensions } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const width = Dimensions.get('window').width;

const height = Dimensions.get("screen").height;
const Top_Height = height / 2.25;


export function Pagination({ currentIndex, totalItems, Yoffset }: { currentIndex: number, totalItems: number, Yoffset: number }) {

    const fadeTextStyle2 = useAnimatedStyle(() => {
        const opacity = interpolate(
            Yoffset,
            [0, Top_Height * 0.4, Top_Height * 0.65], // Adjust the range to control when the fade occurs
            [1, 0.8, 0] // Fade from fully visible (1) to half visible (0.5) to invisible (0)
        );
        return { opacity };
    });
    return (
        <Animated.View style={[style.paginationContainer, { height: Top_Height + Yoffset }]}>
            {Array.from({ length: totalItems }).map((_, i) => (
                <Animated.View
                    key={i}
                    style={[
                        style.dot,
                        i === currentIndex ? style.activeDot : style.inactiveDot,fadeTextStyle2

                    ]}
                />
            ))}
        </Animated.View>
    );
}

const style = StyleSheet.create({
    main: {
        position: "absolute",
        bottom: 10,  // Adjust as needed
        left: Top_Height / 2.8,
        height: 10,
        width: 120,
        borderRadius: 15,
        backgroundColor: "#f0f0f0", // Visible background color
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#000", // Text color
        fontSize: 16,
    },
    paginationContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: 'white',
        
    },
    inactiveDot: {
        backgroundColor: '#888',
    },
});