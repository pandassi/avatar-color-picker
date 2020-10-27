import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import ColorPalette from "react-native-color-palette";
import { styles } from "./App";

const Colors = {
	grey: "#CACACB",
	lila: "#c8a2c8",
	tan: "#F98866",
	sea: "#006994",
	canary: "#FFFF9E",
	caca: "#705202",
	lime: "#BFFF00",
	skin: "#FFD6BF",
	turquoise: "#61CACA",
	sunset: "#fd5e53",
};

const FormStyles = StyleSheet.create({
	input_text: {
		height: "100%",
		flex: 1,
    	outlineWidth: 0,
				minWidth: 0,
	},
})

export default function FieldInput() {
	//const selectedColor = Colors;
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [color, setColor] = React.useState(Colors.grey);
	const initials = (firstName[0] || "") + (lastName[0] || "");

	console.log(initials);

	return (
		<>
			<View>
				<Avatar
					size="xlarge"
					rounded
					title={initials}
					overlayContainerStyle={{ backgroundColor: color }}
				/>
			</View>
			<View style={styles.input}>
				<TextInput
					onChangeText={setFirstName}
					value={firstName}
					placeholder="First Name"
          style={FormStyles.input_text}
				/>
			</View>
			<View style={styles.input}>
				<TextInput
					onChangeText={setLastName}
					value={lastName}
					placeholder="Last Name"
          style={FormStyles.input_text}
				/>
			</View>

			<ColorPalette
				title={"Pick your color:"}
				defaultColor={Colors.grey}
				onChange={setColor}
				value={color}
				colors={Object.values(Colors)}
				icon={<Text>✔</Text>}
			/>
		</>
	);
}