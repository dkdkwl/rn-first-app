import { Tabs } from 'expo-router';
import React from 'react';
import { Platform,TouchableOpacity } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 80,
          },
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
          title:"홈",
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
