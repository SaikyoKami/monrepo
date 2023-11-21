import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const AboutScreen = ({ navigation, route }) => {
	const { itemId, itemTitle } = route.params;

	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>About Screen</Text>
			<Text>{itemTitle}</Text>
			<Text>{itemId}</Text>
			<Button mode='contained' onPress={() => navigation.goBack()}>
				Go back
			</Button>
		</View>
	);
};

export default AboutScreen;
