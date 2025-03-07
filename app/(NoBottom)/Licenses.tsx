import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, SafeAreaView, useColorScheme, Pressable, StyleSheet ,Dimensions} from "react-native";
import { Colors } from '@/constants/Colors';
import { ScrollView } from "react-native-gesture-handler";
export default function account_info() {
  const theme = useColorScheme() ?? 'light';
  // const height = Dimensions.get('window').height;
  return <>
    <ScrollView style={{flex:1}}>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>accompanist</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>actionlauncherapi</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>androidx</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>coil</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>compose-imageloder</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>compose-multiplateform</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>compode-shimmer</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>cryptrography-kotlin</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>firebase-androide-sdk</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>firebase-kotline-sdk</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>haze</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>koin</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>kotlin</ThemedText>
      </ThemedView>
      <ThemedView style={{ width: "100%" ,height:50 ,paddingLeft:0 ,justifyContent:"center",display:"flex"}}>
        <ThemedText style={style.Toptitle}>kotlinx-atomicfu</ThemedText>
      </ThemedView>

    </ScrollView>
  </>

}

const style= StyleSheet.create(
  {
    Toptitle:{
      fontSize: 16, paddingRight:0,paddingLeft:"10%",fontFamily:"KO"
    },
    smallTitle:{
      fontSize: 12, fontWeight: "600" ,position:"absolute",top:20
    }
  }
)