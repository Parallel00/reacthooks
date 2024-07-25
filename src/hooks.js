import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(flipStateInit = true){
	const [flipped, setFlip] = useState(flipStateInit);
	const flip = () => {
		setFlip(flippedUp => !flippedUp);
	};
	return [flipped, flip];
}

function useAxios(ky, bsUrl){
	const [response, setResponse] = useLocalStorage(ky);
	const addData = async(formt = data => data, allUrl = "") => {
		const resp = await axios.get(`${bsUrl}${allUrl}`);
		setResponse(data => [...data, formt(resp.data)]);
	};
	const clearResp = () => setResponse([]);
	return [response, addData, clearResp];
}

function useLocalStorage(ky, valInit = []){
	if (localStorage.getItem(ky)){
		valInit = JSON.parse(localStorage.getItem(ky));
	}
	const [val, valSet] = useState(valInit);
	useEffect(() => {
		localStorage.setItem(ky, JSON.stringify(val));
	}, [val, ky]);
	return [val, valSet];
}

export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };