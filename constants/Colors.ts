/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#f2f0f5',
    tint: tintColorLight,
    icon: 'white',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    indicator: "orange",
    fonweight:"900"
  
  },
  dark: {
    text: '#ECEDEE',
    background: '#1C1C1C',
    // #151718
    tint: tintColorDark,
    icon: "black",
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    indicator: "#DB3D16",
    fonweight:"900"

  },
  Bglight: {
    text: '#ECEDEE',
    background: 'white',
    tint: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  Bgdark: {
    text: '#ECEDEE',
    background: 'rgba(0,0,0,0.7)',
    tint: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  grey: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: "grey",
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  LightDark: {
    background: '#2C2C2C',

  },
  Themelight: {
    text: 'black',
    background: "#f2f0f5"
  },
  Themedark: {
    text: 'white',
    background: "#1C1C1C"
  },
  trans:{
    icon:"#d9d8dc",
    opacity:0.5
  },
  BGBlack:{
    background:"black",
    fonweight:"600"
  },
  BGWhite:{
    background:"white"
  }
};
