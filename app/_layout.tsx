import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';  // ✅ router 추가!
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Entypo } from '@expo/vector-icons';
import { View, Pressable } from 'react-native'; // ✅ react-native에서 불러오기

import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
      {/* 탭 네비게이터 */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* 상세 페이지 (탭에 안 보임) */}
      <Stack.Screen name="detail"
      options={{
          title: "", // detail 대신 원하는 텍스트
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => router.back()} style={{ marginLeft: 0, marginRight: 15 }}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => router.push("/")}>
              <Octicons name="home" size={24} color="black" />
            </Pressable>
          </View>
          ),
        }} />
      <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
