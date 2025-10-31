# 📱 Panel App Clone (Expo)

A beautiful and modern mobile app built with React Native + Expo Router, inspired by the Panel App UI.
It includes smooth animations, horizontal carousels, and a responsive design — optimized for both Android and iOS.

🧰 Tech Stack & Tools

Expo SDK 52

expo-router → File-based navigation

react-native-reanimated → Smooth, native-performance animations

react-native-gesture-handler & react-native-screens → Enhanced navigation gestures

react-native-reanimated-carousel, react-carousel-animated → Interactive carousels

expo-linear-gradient, expo-font, expo-media-library → UI styling, fonts, and media handling

📁 Project Structure
my-app/
├── app/                   # Screens & navigation (Expo Router)
│   ├── Tabs/              # Tab navigation screens
│   ├── (NoBottom)/        # Screens without bottom tab bar
│   └── _layout.tsx        # Entry point for routing
├── assets/                # Fonts, images, icons, etc.
├── components/            # Custom reusable UI components
├── scripts/               # Utility scripts (e.g., reset-project)
├── App.js / app.config.js
└── README.md


🚀 Getting Started
🔧 Prerequisites

Make sure you have the following installed:

Node.js ≥ 18

Expo CLI

Android Studio / Xcode (optional for native testing)

📦 Installation
# Clone the repository
git clone https://github.com/soham444101/Panel_Clone_App.git

# Navigate to the project
cd Panel_Clone_App

# Install dependencies
npm install


Then install required libraries manually if not included:

npm install @expo/vector-icons@^14.0.2 @gorhom/bottom-sheet@^5.0.6 \
@react-navigation/material-top-tabs@^7.1.0 @react-navigation/native@^7.0.14 \
@react-navigation/stack@^7.1.1 expo@^52.0.25 expo-app-loading@^2.1.1 \
expo-constants@^17.0.4 expo-dev-client@^5.0.9 expo-file-system@^18.0.7 \
expo-font@^13.0.3 expo-linear-gradient@^14.0.2 expo-linking@^7.0.4 \
expo-media-library@^17.0.5 expo-router@^4.0.16 expo-splash-screen@^0.29.20 \
expo-status-bar@^2.0.1 expo-system-ui@^4.0.7 expo-web-browser@^14.0.2 \
react@^18.2.0 react-carousel-animated@^0.1.3 react-dom@^18.2.0 \
react-native@^0.76.6 react-native-gesture-handler@^2.22.0 \
react-native-pager-view@^6.6.1 react-native-reanimated@^3.16.7 \
react-native-reanimated-carousel@^3.5.1 react-native-safe-area-context@^5.1.0 \
react-native-screens@^4.5.0 react-native-svg@^15.11.1 \
react-native-svg-transformer@^1.5.0 react-native-tab-view@^4.0.5 \
react-native-web@^0.19.13


Development dependencies:

npm install @babel/core@^7.26.0 @babel/plugin-transform-template-literals@^7.25.9 \
@types/jest@^29.5.14 @types/react@^19.0.7 @types/react-test-renderer@^19.0.0 \
jest@^29.2.1 jest-expo@^52.0.3 react-test-renderer@^19.0.0 \
typescript@^5.7.3 --save-dev

▶️ Run the App
npm start         # Start Metro bundler
npm run android   # Run on Android
npm run ios       # Run on iOS (macOS only)

✨ Key Features
🖼️ Wallpaper Downloading

Save wallpapers directly to your gallery using expo-media-library.

🧭 Page Navigation

Seamless navigation powered by expo-router and React Navigation (stack & tab).

📄 Content Pagination

Load wallpapers and data efficiently with pagination for a smooth experience.

🎠 Auto-Scrolling Carousel

Automatic, animated horizontal carousel with react-native-reanimated-carousel.

❤️ Like Feature

Tap-to-like with real-time visual feedback and local state storage.

📜 Bottom Sheet Integration

Smooth and customizable @gorhom/bottom-sheet for extra actions or info.

🌐 External Link Navigation

Open websites or apps using expo-linking or expo-web-browser.

🌓 Theme Switching

Supports light/dark mode with system awareness.

## 📬 Contact

**👩‍💻 Author:** Soham Aswar
**📧 Email:** [sohamaswar@gmail.com](mailto:sohamaswar@gmail.com)
**🔗 LinkedIn:** [linkedin.com/in/sohamaswar](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiu_OOsjcyQAxX0YfUHHVMJO7AQFnoECBsQAQ&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Fsoham-aswar-18376b22a%3Ftrk%3Dpublic_profile_browsemap&usg=AOvVaw0ivsKXXKueS298YG0EHdQv&opi=89978449)


⭐ **If you found this project useful, give it a star on GitHub!** [🔼 Back to top](#top)

