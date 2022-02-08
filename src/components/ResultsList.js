import React from "react";
import {Text,StyleSheet,View,Image,FlatList,TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from "react-navigation";

const ResultsList = (props) => {
	if(!props.results.length){
		return null;
	}

	return <View>
		<Text style = {styles.headerStyle}>{props.headerText}</Text>
		<FlatList
			horizontal = {true}
			showsHorizontalScrollIndicator = {false}
			keyExtractor = { (result) => {return result.id} }
			data = {props.results}
			renderItem = { ({item}) => { 
			//renderItem = { (result) => { 
				return <View>
					<TouchableOpacity onPress = { () => { props.navigation.navigate("Show", { id: result.item.id } ) } }>
						<ResultsDetail result = {item.id}/> 
					</TouchableOpacity>
				</View> } 
			}
		/>
	</View>
};

const styles = StyleSheet.create({
	headerStyle:{
		fontSize:19,
		fontWeight:"bold",
		alignSelf:"center"
	}
});

export default withNavigation(ResultsList);