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
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarStyle: Platform.select({
          default: {
            height: 90,
          },
        }),
        tabBarButton: (props) => (
          <TouchableOpacity {...props} style={[props.style, { justifyContent: 'center' }]} />
        ),
      }}>
      <Tabs.Screen
          name="index"
          options={{
            title: "홈",
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
  container: { flex: 1, justifyContent: "center", padding: 20 },
  dropdown: {
    width: 110,
    height: 40,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  text: { marginTop: 20, fontSize: 16 }});
