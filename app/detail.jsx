import { View, Image, Dimensions, StyleSheet,Text } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get("window");

export default function ViewScreen() {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].text;
  return (
    <ThemedView>
      <Image
        source={require("@/assets/images/젖병소독기.webp")}
        style={{ width: width, height: 300 }}
        resizeMode="cover"
      />
      <View style={styles.profileWrap}>
        <View style={styles.profileLeft}>
          <View style={styles.profileBox}>
            <Image
              source={require("@/assets/images/img_none_user.png")}
              style={
                styles.profileImg
              }
              resizeMode="cover"
            />
          </View>
          <View style={styles.profileTextBox}>
            <ThemedText style={[styles.profileTitle,{ color: textColor }]}>부기</ThemedText>
            <ThemedText style={[styles.profileText,{ color: textColor}]}>부평구 부평동</ThemedText>
          </View>
        </View>
        <View style={styles.profileRight}>
          <Text style={styles.profileTemp}>71.5°C</Text>
          <Text style={styles.profileTempText}>매너온도</Text>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  profileWrap:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingRight: 12,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft: 12,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"
  },
  profileLeft:{
    flexDirection:"row"
  },
  profileRight:{

  },
  profileTemp:{
    fontSize:16,
    color:"#f60",
    fontWeight:"800"
  },
  profileTempText:{
    fontSize:12,
    textDecorationLine:"underline"
  },
  profileBox: {
    width:45,
    height:45,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#ededed",
    overflow: "hidden", // 둥글게 잘리도록 추가
  },
  profileTextBox:{
    paddingLeft: 12,
  },
  profileTitle:{
    fontSize:18,
    fontWeight:800,
  },
  profileText:{
    fontSize:12
  },
  profileImg:{
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  }
});