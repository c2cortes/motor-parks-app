import { FETCH_MOTORPARKS, FETCH_CARS_BY_MOTORPARKS } from '../actions/index';

export default function(state = null, action){
	switch (action.type) {
		case FETCH_MOTORPARKS:
		case FETCH_CARS_BY_MOTORPARKS:
			return action.payload.data;
	}
	return state;
}