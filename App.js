import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Button } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";

// import { styles } from "./src/styles/styles";

export default function App() {
	const Stack = createNativeStackNavigator();

	const headerConfig = {
		headerStyle: {
			backgroundColor: "#F4511E",
		},
	};

	const Logo = () => (
		<Image
			style={{ width: 100, height: 50 }}
			source={require("./assets/logo-nike.png")}
		/>
	);

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
				<NavigationContainer>
					<Stack.Navigator screenOptions={headerConfig}>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{
								headerTitle: (props) => <Logo {...props} />,
							}}
						/>
						<Stack.Screen
							name='About'
							component={AboutScreen}
							options={{
								title: "About page",
								headerTintColor: "#FFF",
								headerTitleStyle: {
									fontWeight: "100",
								},
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
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
