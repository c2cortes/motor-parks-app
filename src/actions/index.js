import axios from 'axios';

export const FETCH_MOTORPARKS 			= 'FETCH_MOTORPARKS';
export const FETCH_CARS_BY_MOTORPARKS 	= 'FETCH_CARS_BY_MOTORPARKS';

const apiUrl = 'http://localhost:3000/v3/';

////////***  Actions  ***/////////

export function fetchMotorParks(){
	let request = axios.get(apiUrl + 'motorparks');
	
	return{
		type: FETCH_MOTORPARKS,
		payload: request
	}
}

export function fetchCarsByMotorParks(motorParkId){
	let request = axios.get(apiUrl + 'cars/' + motorParkId);
	
	return{
		type: FETCH_CARS_BY_MOTORPARKS,
		payload: request
	}
}