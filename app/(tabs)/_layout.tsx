import { Tabs } from 'expo-router';
import {useState} from 'react';
import { Platform,TouchableOpacity,Pressable,StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Feather,AntDesign,MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Dropdown } from "react-native-element-dropdown";

export default function TabLayout() {
  const [value, setValue] = useState("1");
  const colorScheme = useColorScheme();
  return (
<Tabs
  screenOptions={{
    headerShown: true,
    headerTitleAlign: "left",

    // 헤더 전체 높이 (iOS에서만 키움)
    headerStyle: {
      height: Platform.OS === "ios" ? 110 : 80, 
    },

    // 제목/오른쪽/왼쪽 컨테이너는 굳이 marginTop 안 줘도 됨
    headerTitleContainerStyle: {
      marginLeft: 0,  // 왼쪽 붙이고 싶을 때만
    },
  }}
>
      <Tabs.Screen
          name="index"
          options={{
            title: "홈",
            headerTitleAlign:'left',
            headerTitle: (color) => (
              <Dropdown
                style={ styles.dropdown }
                data={[
                  { label: "구로동", value: "1" },
                  { label: "상1동", value: "2" },
                ]}
                color={color}
                labelField="label"
                valueField="value"
                value={value}
                onChange={(item) => setValue(item.value)}
                // ✅ 텍스트 스타일들
                placeholder="동 선택"
                selectedTextStyle={{ 
                  fontSize: 20, 
                  color: {color}, 
                  textAlign: 'left',
                  fontWeight:700

                }}
                itemTextStyle={{ fontSize: 18, color: {color} }}
                flatListProps={{
                  nestedScrollEnabled: true,   // ✅ 중첩 스크롤 허용
                }}
              />
            ),
          headerRight: (color) => (
            <Pressable style={{ marginRight: 15,flexDirection:'row',gap:15}}>
              <Feather onPress={() => alert("메뉴 누름")} name="menu" size={26} color={color} />
              <Feather onPress={() => alert("검색 누름")} name="search" size={26} color={color} />
              <AntDesign onPress={() => alert("알림 누름")} name="bells" size={26} color={color} />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title:"동네생활",
          tabBarIcon: ({ color }) => <MaterialIcons name="article" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore2"
        options={{
          title:"동네지도",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="map-marker" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore3"
        options={{
          title:"채팅",
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-sharp" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore4"
        options={{
          title:"나의당근",
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={22} color={color} />,
        }}
      />
    </Tabs>
    
  );
}
const styles = StyleSheet.create({
  dropdown: {
    width: 110,
    height: 40,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize:20
  },
  text: {
    marginTop: 20,
    fontSize: 20
  }
});
