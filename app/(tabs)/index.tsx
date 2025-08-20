import { StyleSheet, ScrollView,FlatList,Text,View,Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const productList = [
  {
    productName: '시밀레 젖병소독기+램프1개',
    productImg: require('@/assets/images/젖병소독기.webp'),
    productPrice: '80,000원',
    productLocal: '중동',
    productTime: '55분',
  },
  {
    productName: '멕시칸 치맵컵(콜팝컵)',
    productImg: require('@/assets/images/치맥컵.webp'),
    productPrice: '3,000원',
    productLocal: '상3동',
    productTime: '3분',
  },
  {
    productName: 'Prota 수납 정리함',
    productImg: require('@/assets/images/수납바구니.webp'),
    productPrice: '4,000원',
    productLocal: '상2동',
    productTime: '35분',
  },
  {
    productName: 'LG 울트라PC 노트북 15인치 라이젠3 15UD40N-GX36K 랩업글',
    productImg: require('@/assets/images/노트북.webp'),
    productPrice: '270,000원',
    productLocal: '중동',
    productTime: '15분',
  },
  {
    productName: '시밀레 젖병소독기+램프1개',
    productImg: require('@/assets/images/젖병소독기.webp'),
    productPrice: '80,000원',
    productLocal: '중동',
    productTime: '55분',
  },
  {
    productName: '멕시칸 치맵컵(콜팝컵)',
    productImg: require('@/assets/images/치맥컵.webp'),
    productPrice: '3,000원',
    productLocal: '상3동',
    productTime: '3분',
  },
  {
    productName: 'Prota 수납 정리함',
    productImg: require('@/assets/images/수납바구니.webp'),
    productPrice: '4,000원',
    productLocal: '상2동',
    productTime: '35분',
  },
  {
    productName: 'LG 울트라PC 노트북 15인치 라이젠3 15UD40N-GX36K 랩업글',
    productImg: require('@/assets/images/노트북.webp'),
    productPrice: '270,000원',
    productLocal: '중동',
    productTime: '15분',
  }
];
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].text;
  return (
      <ThemedView style={styles.titleContainer}>
        <FlatList style={styles.list}
          data={productList}
          renderItem={({ item, index }) => (
            <View style={[styles.item, index !== 0 && styles.borderTop]}>
              <View style={styles.imageWrapper}>
                <Image source={item.productImg} style={styles.image} />
              </View>
              <View style={styles.itemTextBox}>
                <ThemedText style={[styles.title, { color: textColor }]}>{item.productName}</ThemedText>
                <ThemedText style={styles.text} >{item.productLocal} {item.productTime} {item.key}</ThemedText>
                <ThemedText style={styles.price} >{item.productPrice}</ThemedText>
              </View>
            </View>
          )}
        />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  list:{
    paddingRight: 15,
    paddingLeft: 15,
  },
  item:{
    flexDirection:'row',
    fontSize:20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemTextBox:{
    paddingLeft:10,
    paddingRight:10
  },
  title:{
    fontSize:16,
  },
  text:{
    fontSize:12,
    color:'#888888'
  },
  price:{
    fontSize:16,
    fontWeight:700
  },
  imageWrapper: {
    width: 110,
    height: 110,
    borderRadius: 20,
    overflow: "hidden", // 둥글게 자르는 핵심!
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  borderTop: {
    borderTopWidth: 1, // 위쪽 경계선 두께
    borderTopColor: '#e0e0e0', // 위쪽 경계선 색상
  }
});
