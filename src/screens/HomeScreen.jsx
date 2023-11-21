import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button
				mode='contained'
				onPress={() =>
					navigation.navigate("About", {
						itemId: 12,
						itemTitle: "New title",
					})
				}>
				Go to About Screen
			</Button>
		</View>
	);
};

export default HomeScreen;
