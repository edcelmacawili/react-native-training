import { Link } from "expo-router";
import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";

import gundamImg from "@/assets/images/gundam.png";

const app = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={gundamImg}
				resizeMode="cover"
				style={styles.image}
			>
				<Text style={styles.text}>Gundam Shop</Text>
				<Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Check items</Text>
					</Pressable>
				</Link>
			</ImageBackground>
		</View>
	);
};

export default app;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 40,
		fontWeight: "light",
		textAlign: "center",
		marginBottom: 20,
	},
	image: {
		width: "100%",
		height: "100%",
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	link: {
		color: "white",
		fontSize: 20,
		textAlign: "center",
		marginTop: 20,
	},
	button: {
		borderRadius: 20,
		backgroundColor: "rgba(255, 255, 255, 0.5)",
	},
	buttonText: {
		color: "black",
		fontSize: 20,
		textAlign: "center",
		margin: 20,
	},
});
