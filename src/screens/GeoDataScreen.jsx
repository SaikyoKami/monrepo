import React from "react";
import {
	Text,
	View,
	Image,
	TextInput,
	StyleSheet,
	FlatList,
} from "react-native";
import { Button } from "react-native-paper";

import { styles } from "../styles/styles";

const GeoDataScreen = ({ navigation }) => {
	const [cities, setCities] = React.useState([]);
	const [city, setCity] = React.useState("");
	const [data, setData] = React.useState();
	const [loading, setLoading] = React.useState(false);
	const API_KEY = "wd1m2cacHhIDqPnlXsqBGw==zrfEMuKmaO0dkJD2";

	React.useEffect(() => {
		console.log(data);
		if (data) {
			const newCities = [...cities, data[0]];
			setCities(newCities);
		}
	}, [data]);

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`https://api.api-ninjas.com/v1/geocoding?city=${city}`,
				{
					headers: {
						"X-Api-Key": API_KEY,
						contentType: "application/json",
					},
				}
			);
			const dataJson = await response.json();
			setLoading(false);
			setData(dataJson);
			console.log("datajson : ", dataJson);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const handleSubmit = () => {
		console.log("clicked");
		console.log(city);
		fetchData();
		setCity("");
		// console.log(data);
	};

	return (
		<View style={styles.screen}>
			<Text>GeoData Screen</Text>
			<View style={{ flex: 1 }}>
				<FlatList
					data={cities}
					keyExtractor={() => Math.random()}
					renderItem={({ item }) => (
						<View style={{ flexDirection: "row", marginBottom: 5 }}>
							<Text style={{ color: "#FFF", fontSize: 24 }}>
								{item.name}
							</Text>
							<Button
								mode='contained'
								onPress={() =>
									navigation.navigate("Meteo", {
										city: item.name,
									})
								}>
								Voir Meteo
							</Button>
							<Button mode='contained'>X</Button>
						</View>
					)}
				/>
				{loading && <Text style={{ color: "#FFF" }}>Loading ...</Text>}
			</View>
			<View style={{ flex: 1 }}>
				{/* {data && <Text>{data.temp}</Text>} */}
				<TextInput
					style={styles2.input}
					placeholder='city'
					onChangeText={setCity}
					value={city}
				/>
				<Button onPress={handleSubmit}>Send</Button>
			</View>
		</View>
	);
};

const styles2 = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "#FFF",
		width: 150,
		color: "#FFF",
		height: 50,
	},
});

export default GeoDataScreen;
