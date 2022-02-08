import React,{useState,useEffect} from "react";
import {Text,Image,View,StyleSheet,FlatList} from "react-native";
import Yelp from "../api/Yelp";

const ResultsShowScreen = (props) => {

const [result, setResult] = useState(null);
const id = props.navigation.getParam("id");

	const getResult = async(id) => {
		const detailResponse = await Yelp.get(`/${id}`);
		setResult(detailResponse.data);
	}

	useEffect ( () => {getResult(id)}, [] );
	if(!result){
		return null;
	}

	return <View>
		<Text>{result.name}!</Text>
		<FlatList
			data = {result.photos}
			keyExtractor = { (photo) => {return photo} }
			renderItem = { ({item}) => {
				return <Image style = {styles.photo} source = { {uri: item} } />
				}
			}
		/>
	</View>
}

const styles = StyleSheet.create({
	photo:{
		height:200,
		width:200
	}
});

export default ResultsShowScreen;