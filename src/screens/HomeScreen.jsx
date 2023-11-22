import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

import { styles } from "../styles/styles";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text>Home Screen</Text>
			<Image
				style={{ width: 100, height: 50 }}
				source={require("../../assets/logo-nike.png")}
			/>
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
