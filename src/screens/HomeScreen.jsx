import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

import { styles } from "../styles/styles";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
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
