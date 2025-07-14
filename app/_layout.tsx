import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Appearance } from "react-native";

import { Colors } from "@/constants/Colors";

export default function RootLayout() {
	const colorScheme = Appearance.getColorScheme();

	const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	if (!loaded) {
		// Async font loading only occurs in development.
		return null;
	}

	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: theme.headerBackground },
				headerTintColor: theme.text,
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{ title: "Home", headerShown: false }}
			/>
			<Stack.Screen
				name="menu"
				options={{
					title: "Menu",
					headerShown: true,
					headerTitle: "Menu Screen",
				}}
			/>

			<Stack.Screen
				name="explore"
				options={{
					title: "Explore",
					headerShown: true,
					headerTitle: "Explore Screen",
				}}
			/>
			<Stack.Screen name="+not-found" />
		</Stack>
	);
}
