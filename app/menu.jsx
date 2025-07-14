import { Colors } from "@/constants/Colors";
import { Gundams } from "@/constants/Gundam";
import GundamImages from "@/constants/GundamImages";
import {
	Appearance,
	FlatList,
	Image,
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";

export default function MenuScreen() {
	const colorScheme = Appearance.getColorScheme();

	const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

	const styles = createStyles(theme, colorScheme);

	const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

	const separatorComponent = <View style={styles.separator} />;

	return (
		<Container>
			<FlatList
				data={Gundams}
				keyExtractor={(item) => item.id.toString()}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}
				ItemSeparatorComponent={separatorComponent}
				renderItem={({ item }) => (
					<View style={{ alignItems: "center", marginVertical: 10 }}>
						<View
							style={{
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								marginBottom: 10,
							}}
						>
							<Text style={{ color: "white", fontWeight: "bold" }}>
								{item.name}
							</Text>
							<Text style={{ color: "white" }}>{item.description}</Text>
						</View>
						<Image
							source={GundamImages[item.id - 1]}
							style={{ width: 100, height: 200 }}
							resizeMode="cover"
						/>
					</View>
				)}
			/>
		</Container>
	);
}

function createStyles(theme, colorScheme) {
	return StyleSheet.create({
		contentContainer: {
			paddingTop: 10,
			paddingBottom: 20,
			paddingHorizontal: 12,
			backgroundColor: theme.background,
		},
		separator: {
			height: 1,
			backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
			width: "50%",
			maxWidth: 300,
			marginHorizontal: "auto",
			marginVertical: 10,
		},
	});
}
