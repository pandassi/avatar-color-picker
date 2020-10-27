import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FieldInput from "./InputField";

export default function App() {
	return (
		<View style={styles.container}>
			<FieldInput />
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		backgroundColor: "#fff",
		justifyContent: "space-around",
		textAlign: "center",
		alignItems: "center",
	},

	input: {
		padding: 5,
		borderColor: "#CACACB",
		borderWidth: 2,
		borderRadius: 2,
		height: 40,
		width: 300,
		justifyContent: "center",
		backgroundColor: "#FFE5B4",
	},
});
