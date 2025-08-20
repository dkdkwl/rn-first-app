import { Tabs } from 'expo-router';
import React from 'react';
import { Platform,TouchableOpacity,Pressable } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Feather,AntDesign,MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarStyle: Platform.select({
          default: {
            height: 80,
          },
        }),
        tabBarButton: (props) => (
          <TouchableOpacity {...props} style={[props.style, { justifyContent: 'center' }]} />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title:"",
          headerLeft: color => (
            <Pressable onPress={() => {alert("알림 누름")}} style={{ marginLeft: 15 }}>
              <Ionicons name="arrow-back" size={24} color={color} />
            </Pressable>
          ),
          headerRight: (color) => (
            <Pressable style={{ marginRight: 15,flexDirection:'row',gap:15 }}>
              <Feather onPress={() => alert("메뉴 누름")} name="menu" size={26} color="black" />
              <Feather onPress={() => alert("검색 누름")} name="search" size={26} color="black" />
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
