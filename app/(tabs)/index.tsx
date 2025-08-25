import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetch("https://my-json-server.typicode.com/dkdkwl/rn-db/products")
    .then(res => res.json())
    .then((data) => {
      setProducts(data);
      console.log(data);
    })
    .catch(err => console.error(err));
}, [])
  
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].text;
  return (
      <ThemedView style={styles.titleContainer}>
    <View style={styles.container}>
      {/* 프로필 이미지 자리 */}
      <Skeleton width={80} height={80} radius="round" colorMode="light" />

      {/* 이름 자리 */}
      <Skeleton width={200} height={20} radius={4} colorMode="light" style={{ marginTop: 16 }} />

      {/* 서브 텍스트 자리 */}
      <Skeleton width={150} height={20} radius={4} colorMode="light" style={{ marginTop: 8 }} />
    </View>
        <FlatList style={styles.list}
          data={products}
          renderItem={({ item, index }) => (
              <Pressable onPress={() => navigation.navigate("detail")} style={[styles.item, index !== 0 && styles.borderTop]} >
                <View style={styles.imageWrapper}>
                <Image source={{uri: item.img}} style={styles.image} />
                </View>
                <View style={styles.itemTextBox}>
                <ThemedText style={[styles.title, { color: textColor }]}>{item.title}</ThemedText>
                <ThemedText style={styles.text} >{item.location} &middot; {item.createdAt}</ThemedText>
                <ThemedText style={styles.price} >{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</ThemedText>
                </View>
              </Pressable>
          )}
          />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
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
    fontWeight:500
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
    borderRadius: 13,
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
