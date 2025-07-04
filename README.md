# 📱 My Expo Panel App Clone

A beautiful mobile app built with **React Native + Expo Router**, inspired by the Panel app UI. This project includes modern animations, carousel views, custom tab navigators, and cross-platform compatibility.

---
## Major Libraries & Tools
Expo SDK 52

expo-router for filesystem-based navigation

react-native-reanimated for smooth animations

react-native-gesture-handler, react-native-screens

react-native-reanimated-carousel, react-carousel-animated

expo-linear-gradient, expo-font, expo-media-library


## 📁 Project Structure

```text
my-app/
├── app/                   # Screens & layout via Expo Router
│   ├── Tabs/             # Tab navigations
│   ├── (NoBottom)/       # Screens without bottom tab
│   └── _layout.tsx       # Entry point for routing
├── assets/               # Fonts, images, etc.
├── components/           # Custom reusable UI components
├── scripts/              # Utility scripts (e.g. reset-project)
├── App.js or app.config.js
└── README.md
```


## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js ≥ 18  
- Expo CLI  
- Android Studio / Xcode (optional for native testing)

### 📦 Installation
git clone https://github.com/soham444101/Panel_Clone_App.git

npm install

npm install @expo/vector-icons@^14.0.2 @gorhom/bottom-sheet@^5.0.6 @react-navigation/material-top-tabs@^7.1.0 @react-navigation/native@^7.0.14 @react-navigation/stack@^7.1.1 expo@^52.0.25 expo-app-loading@^2.1.1 expo-constants@^17.0.4 expo-dev-client@^5.0.9 expo-file-system@^18.0.7 expo-font@^13.0.3 expo-linear-gradient@^14.0.2 expo-linking@^7.0.4 expo-media-library@^17.0.5 expo-router@^4.0.16 expo-splash-screen@^0.29.20 expo-status-bar@^2.0.1 expo-system-ui@^4.0.7 expo-web-browser@^14.0.2 react@^18.2.0 react-carousel-animated@^0.1.3 react-dom@^18.2.0 react-native@^0.76.6 react-native-gesture-handler@^2.22.0 react-native-pager-view@^6.6.1 react-native-reanimated@^3.16.7 react-native-reanimated-carousel@^3.5.1 react-native-safe-area-context@^5.1.0 react-native-screens@^4.5.0 react-native-svg@^15.11.1 react-native-svg-transformer@^1.5.0 react-native-tab-view@^4.0.5 react-native-web@^0.19.13 --save && npm install @babel/core@^7.26.0 @babel/plugin-transform-template-literals@^7.25.9 @types/jest@^29.5.14 @types/react@^19.0.7 @types/react-test-renderer@^19.0.0 jest@^29.2.1 jest-expo@^52.0.3 react-test-renderer@^19.0.0 typescript@^5.7.3 --save-dev


## Run the App
npm start         # Start Metro bundler

npm run android   # Run on Android

npm run ios       # Run on iOS (macOS only)

## ✨ Features
 Wallpaper Downloading
Save wallpapers directly to your device's gallery using expo-media-library.

Page Navigation
Smooth navigation using expo-router and @react-navigation stack/tab systems.

Content Pagination
Load content in pages to improve performance and user experience.

 Horizontal Scrolling with Timer Loop
Automatic, animated scrolling carousel using react-native-reanimated-carousel.

 Like Feature
Tap-to-like functionality with visual feedback and state storage.

 Bottom Sheet Integration
Seamlessly integrated bottom sheet using @gorhom/bottom-sheet for more details or actions.

 External Link Navigation
Open external websites or apps via expo-linking or expo-web-browser.

 Theme Switching
Toggle between dark and light themes with system-aware support.

## Contact
Email : sohamaswar@gmail.com

GitHub Profile : soham444101


