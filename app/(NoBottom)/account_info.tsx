import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, SafeAreaView, useColorScheme, Pressable, StyleSheet ,Dimensions} from "react-native";
import { Colors } from '@/constants/Colors';
export default function account_info() {
  const theme = useColorScheme() ?? 'light';
  // const height = Dimensions.get('window').height;
  return <>
    <ThemedView style={{flex:1}}>
      <ThemedView style={{ width: "100%" ,height:50 ,marginTop:"4%",marginLeft:"7.5%",paddingLeft:0 }}>
        <ThemedText style={style.Toptitle}>Notification</ThemedText>
        <ThemedText style={style.smallTitle}>Tap TO Grant Permission</ThemedText>
      </ThemedView>


      <ThemedView style={{ width: "100%" ,display:"flex",flexDirection:"row" ,paddingLeft:"7.5%",paddingTop:"4%",height:70}}>
        
        <ThemedView style={{ width: "50%" }}>
        <ThemedText style={style.Toptitle}>Notification</ThemedText>
        <ThemedText style={{ fontSize: 12, fontWeight: "600" ,position:"absolute",top:25, width:"100%",lineHeight:12}}>Undefine usages state,performence ,issue,etc</ThemedText>
        </ThemedView>

        <ThemedView style={{marginLeft:"30%"}}>
          <ToggleButton />
        </ThemedView>
      </ThemedView >
      <ThemedView style={{ width: "100%" ,display:"flex",flexDirection:"row" ,paddingLeft:"7.5%",paddingTop:"6%",height:50}}>
      <ThemedText style={style.Toptitle}>Restore Purchase</ThemedText>

      </ThemedView>
    </ThemedView>
  </>

}

function ToggleButton() {
  const theme = useColorScheme() ?? 'light';
  return <Pressable
  
  >
    <Ionicons
      style={{ marginLeft:"0%"}}
      name={'toggle'}
      size={40}
      color={theme === 'light' ? Colors.dark.icon : Colors.light.icon}
    />
  </Pressable>
}
const style= StyleSheet.create(
  {
    Toptitle:{
      fontSize: 15, fontWeight: "600", paddingRight:0
    },
    smallTitle:{
      fontSize: 12, fontWeight: "600" ,position:"absolute",top:20
    }
  }
)