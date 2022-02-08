import React from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";
import {Entypo} from "@expo/vector-icons";

const SearchBar = (props) => {
	return <View style = {styles.background}>
		<Entypo size = {30} name = "magnifying-glass"/>
		<TextInput 
			style = {styles.text} 
			placeholder = "Search"
			value = {props.searchTerm}
			onChangeText = {(newTerm) => props.onTermChange(newTerm)}
			onEndEditing = { () => {props.onSearchTermSubmit()} }
			/>
	</View>
}

const styles = StyleSheet.create({
	background:{
		backgroundColor:"lightgrey",
		borderRadius:5,
		width:250,
		borderWidth:1,
		marginHorizontal:1,
		borderColor:"grey",
		flexDirection:"row"
	},
	text:{
		fontSize:20
	}
});

export default SearchBar;