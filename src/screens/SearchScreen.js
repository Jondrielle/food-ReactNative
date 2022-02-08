import React,{useState,useEffect} from "react";
import {Text,StyleSheet,View, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ()=> {
const [searchTerm,setSearchTerm] = useState("");
const [searchApi,results,errorMessage] = useResults();

const filterResultsByPrice = (price) => {

	let myfilteredArray = results.filter( (result) => {
		return result.price === price;
	})

	return myfilteredArray;
};

	return <>
		<SearchBar 
			searchTerm = {searchTerm} 
			onTermChange = {(newTerm) => setSearchTerm(newTerm)}
			onSearchTermSubmit = { () => {searchApi(searchTerm)} }/>
		{errorMessage ? <Text>{errorMessage}</Text> : null}
		<ScrollView>
			<ResultsList results = {filterResultsByPrice("$")} headerText = "Budget Options"/>
			<ResultsList results = {filterResultsByPrice("$$")} headerText = "A Little Pricey"/>
			<ResultsList results = {filterResultsByPrice("$$$")} headerText = "Gotta be Rich"/>
		</ScrollView>
	</>
};

const styles = StyleSheet.create({
	container:{
		borderWidth: 3,
		borderColor:"red",
		flex:1
	}
});

export default SearchScreen;