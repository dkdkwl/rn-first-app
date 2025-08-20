import { StyleSheet, ScrollView,FlatList,Text,View,Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const productList = [
  {
    productName: '시밀레 젖병소독기+램프1개',
    productImg: '시밀레 젖병소독기+램프1개',
    productPrice: '80,000원',
    productLocal: '중동',
    productTime: '55분',
  },
  {
    productName: '멕시칸 치맵컵(콜팝컵)',
    productPrice: '3,000원',
    productLocal: '상3동',
    productTime: '3분',
  },
  {
    productName: 'Prota 수납 정리함',
    productPrice: '4,000원',
    productLocal: '상2동',
    productTime: '35분',
  },
  {
    productName: '시밀레 젖병소독기+램프1개',
    productImg: '시밀레 젖병소독기+램프1개',
    productPrice: '80,000원',
    productLocal: '중동',
    productTime: '55분',
  },
  {
    productName: '멕시칸 치맵컵(콜팝컵)',
    productPrice: '3,000원',
    productLocal: '상3동',
    productTime: '3분',
  },  {
    productName: 'Prota 수납 정리함',
    productPrice: '4,000원',
    productLocal: '상2동',
    productTime: '35분',
  },
];
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].text;
  return (
      <ThemedView style={styles.titleContainer}>
        <FlatList
          data={productList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.imageWrapper}>
                <Image source={require('@/assets/images/favicon.png')} style={styles.image} />
              </View>
              <View>
                <ThemedText style={[styles.item, { color: textColor }]}>{item.productName}</ThemedText>
                <ThemedText >{item.productLocal} {item.productTime} {item.key}</ThemedText>
                <ThemedText >{item.productPrice}</ThemedText>
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
  item:{
    flexDirection:'row',
    fontSize:20,
    marginVertical:5
  },
  title:{
    fontSize:20,
  },
  text:{
    fontSize:16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  imageWrapper: {
    width: 120,
    height: 120,
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
});
