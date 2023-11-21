import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Button } from "react-native-paper";

// import { styles } from "./src/styles/styles";

export default function App() {
	return (
		<View style={{ flex: 1, backgroundColor: "pink" }}>
			<StatusBar style='auto' />
			<Text>Karim</Text>
			<SafeAreaView
				style={[
					styles.container,
					{
						paddingTop:
							Platform.OS != "ios"
								? 0
								: Constants.statusBarHeight,
					},
				]}>
				<View style={{ flex: 1, backgroundColor: "pink" }}>
					<View style={{ flex: 1, backgroundColor: "red" }}>
						<Text>Mon texte</Text>
					</View>
					<View style={{ flex: 1, backgroundColor: "#FFF" }}></View>
					<View style={{ flex: 3, backgroundColor: "green" }}></View>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		flexDirection: "column",
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
		// padding: 15,
	},
});
