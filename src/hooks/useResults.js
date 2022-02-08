import React,{useState,useEffect} from "react";
import Yelp from "../api/Yelp";


export default () => {
	const [results,setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchTerm) =>{
	try{
			const response = await Yelp.get("/search",{
				params:{
					limit:50,
					location:"New Orleans",
					term: searchTerm
				}
			});
			setResults(response.data.businesses);
		}catch(e){
			setErrorMessage("Oops, something went wrong!");
		}
	}
		//This will create an infitie loop searchApi("pizza");

	useEffect( () => {
		searchApi("pizza");
	}, []);

	return [searchApi,results,errorMessage];
};