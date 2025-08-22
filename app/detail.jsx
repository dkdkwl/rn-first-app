import { View, Image, Dimensions, StyleSheet,Text ,ScrollView } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get("window");

export default function ViewScreen() {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].text;
  return (
    <ScrollView>
      <ThemedView style={styles.contentWrap}>
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
            <ThemedText style={styles.profileTemp}>71.5°C</ThemedText>
            <ThemedText style={styles.profileTempText}>매너온도</ThemedText>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>나오테크 3in1 오토스핀 맥세이프 충전기^^ 나오테크 3in1 오토스핀 맥세이프 충전기^^</Text>
          <View>
            <Text style={[styles.contentPrice,{ color: textColor}]}>20,000원</Text>
            <View>
              <Text style={styles.contentCate}><Text style={styles.underLine}>스포츠/레저</Text> &middot; 53분 전</Text>
            </View>
            <View>
            <Text style={[styles.contentTextBox,{color: textColor}]}>
{`언제나 좋은물건 저렴하게(?) 정직하게
판매하는 프리소파입니다ㅋㅋ

나오테크 3in1 오토스핀 맥세이프 충전기^^
미사용 새상품

제품설명은 아래 링크참조

충동구매했으나 사용안함ㅠㅠ

언제나처럼
정당한네고 환영합니다

베트남에 사업하러갈 예정이라서
가지고있는 물건 모두 정리중이니
다른 제품들도 관심가져주세요^^

제품설명은 아래참조`}
  </Text>

                <View style={styles.contentBottom}>
                  {/* <Text style={{ fontSize: 16, fontWeight: "800" }}>거래 희망 장소</Text>
                  <Text style={{ fontSize: 16, marginLeft: 10 }}>어린이 공원</Text>
                  <Entypo 
                    name="chevron-small-right" 
                    size={20} 
                    color="black" 
                    style={{
                      marginLeft: 0, marginTop: 0
                    }} // marginTop 살짝 주면 baseline 맞음
                  /> */}
                  <View style={{flexDirection:"column"}}>
                    <ThemedText style={styles.contentBottomInterest}>채팅 2 &middot; 관심 5 &middot; 조회 236</ThemedText>
                    <ThemedText style={[styles.underLine,{marginTop:10,fontSize:14,color:"#888888"}]}>이 게시글 신고하기</ThemedText>
                  </View>
              </View>
            </View>
          </View>
        </View>
        
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentWrap:{
    flex: 1
  },
  profileWrap:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingRight: 14,
    paddingTop:13,
    paddingBottom:13,
    paddingLeft: 14,
    borderBottomWidth:1,
    borderBottomColor:"#efefef"
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
    paddingLeft: 14,
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
  },
  content:{
    paddingTop:30,    
    paddingRight:14,
    paddingLeft: 14,
    lineHeight: 30,
    marginBottom: 30,
  },
  contentTitle:{
    fontSize:20,
    fontWeight:700,
    lineHeight:28
  },
  underLine:{
    textDecorationLine:"underline"
  },
  contentPrice:{
    fontSize:19,
    fontWeight:700,
    marginTop:11,
  },
  contentCate:{
    marginTop:9,
    color:"#888888"
  },
  contentTextBox:{
    marginTop:20,
    marginBottom:40,
    fontSize:16,
    lineHeight:24
  },
  contentBottom: {
    flexDirection: "row",   // 가로 배치
    alignItems: "center",   // 세로 중앙 정렬
  },
  contentBottomInterest: {
    color:"#888888",
    fontSize:12,
  }



});