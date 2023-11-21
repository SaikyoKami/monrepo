import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Button } from "react-native-paper";

// import { styles } from "./src/styles/styles";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<View style={{ flex: 1, backgroundColor: "pink" }}>
			<StatusBar style='auto' />
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
				<View
					style={{
						flex: 1,
						backgroundColor: "#303030",
						// flexDirection: "column",
						// justifyContent: "center",
						// alignItems: "center",
					}}>
					<Text style={styles.title}>{count}</Text>
					<View style={{ flexDirection: "row" }}>
						<Button
							icon='minus'
							mode='contained'
							onPress={() => setCount(count - 1)}>
							Press me
						</Button>
						<Button
							icon='plus'
							mode='contained'
							onPress={() => setCount(count + 1)}>
							Press me
						</Button>
					</View>
					{/* <View style={{ flex: 1, backgroundColor: "red" }}>
						<Text>Mon texte</Text>
					</View>
					<View style={{ flex: 1, backgroundColor: "#FFF" }}></View>
					<View style={{ flex: 3, backgroundColor: "green" }}></View> */}
					{/* <View
						style={[
							styles.box,
							{ backgroundColor: "blue" },
						]}></View>
					<View
						style={[
							styles.box,
							{ backgroundColor: "green" },
						]}></View>
					<View
						style={[
							styles.box,
							{ backgroundColor: "white" },
						]}></View> */}
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
	},
	container: {
		flex: 1,
		flexDirection: "column",
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
		// padding: 15,
	},
	box: {
		// height: 100,
		// width: 100,
		flex: 1,
	},
});
