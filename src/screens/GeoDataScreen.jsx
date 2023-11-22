import React from "react";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { styles } from "../styles/styles";

const GeoDataScreen = ({ navigation }) => {
	const [city, onChangeCity] = React.useState("");
	const [data, setData] = React.useState(null);
	const API_KEY = "wd1m2cacHhIDqPnlXsqBGw==zrfEMuKmaO0dkJD2";

	const fetchData = async () => {
		try {
			const response = await fetch(
				`https://api.api-ninjas.com/v1/weather?city=${city}`,
				{
					headers: { "X-Api-Key": API_KEY },
					contentType: "application/json",
				}
			);
			const dataJson = await response.json();
			setData(dataJson);
		} catch (error) {
			alert(error);
		}
	};

	const handleSubmit = () => {
		fetchData();
		console.log(data);
	};

	return (
		<View style={styles.screen}>
			<Text>GeoData Screen</Text>
			{data && <Text>{data.temp}</Text>}
			<TextInput
				style={styles2.input}
				placeholder='city'
				onChangeText={onChangeCity}
				value={city}
			/>
			<Button onPress={handleSubmit}>Send</Button>
		</View>
	);
};

const styles2 = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "#FFF",
		width: 150,
		color: "#FFF",
	},
});

export default GeoDataScreen;
