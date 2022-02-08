import React from "react";
import {Text,Image,View,StyleSheet} from "react-native";

const ResultsDetail = (props) => {
console.log(props);
const id = props.navigation.getParam("result");
	return <View style = {styles.containerView}>
		<Image style = {styles.image} source = { { uri: props.result.image_url } }/>
		<Text style = {styles.name} > {props.result.name} </Text>
		<Text> {props.result.rating} Stars, {props.result.review_count} Reviews </Text>
	</View>
}

const styles = StyleSheet.create({
	containerView:{
		margin:15
	},
	image: {
		height:200,
		width:280,
		borderRadius: 5
	},
	name: {
		fontWeight: "bold"
	}
});

export default ResultsDetail;