import { GestureHandlerRootView } from 'react-native-gesture-handler';
  import { Stack } from 'expo-router/stack';
  import { useColorScheme } from 'react-native';
  import { Colors } from '@/constants/Colors';

  
  export default function App() {
    const theme = useColorScheme() ?? 'light';

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
       <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Here, just define the screen name */}
          <Stack.Screen
            name="(NoBottom)/account_info"

            options={{
              headerShown: true,
              headerTitle: "Account",
              headerBackTitle: "<",
              headerStyle: {
                backgroundColor: Colors[theme].background,
              },
              headerTitleStyle: { color: theme === 'light' ? Colors.dark.icon : Colors.light.icon },
              headerTintColor: theme === 'light' ? Colors.dark.icon : Colors.light.icon
            }}

          />
          <Stack.Screen
            name="(NoBottom)/Wallpaper_USer"

            options={{
             headerTransparent:true,
            //  headerShadowVisible: false, // Removes the shadow/border
             presentation: 'transparentModal',
              headerShown: true,
              headerTitle: "",
              headerBackTitle: "<",
              headerStyle: {
                // backgroundColor:"transperent",
                 
              },
              headerTitleStyle: { color: theme === 'light' ? Colors.dark.icon : Colors.light.icon },
              headerTintColor: theme === 'light' ? Colors.dark.icon : Colors.light.icon
            }}

          />
          <Stack.Screen
            name="(NoBottom)/Licenses"

            options={{
              headerShown: true,
              headerTitle: "Licenses",
              headerBackTitle: "<",
              headerStyle: {
                backgroundColor: Colors[theme].background,
              },
              headerTitleStyle: { color: theme === 'light' ? Colors.dark.icon : Colors.light.icon },
              headerTintColor: theme === 'light' ? Colors.dark.icon : Colors.light.icon
            }}

          />
        </Stack>
      
      </GestureHandlerRootView>
    );
  }
 
