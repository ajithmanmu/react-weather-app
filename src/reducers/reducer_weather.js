import {FETCH_WEATHER} from '../actions/index';

export default function (state= [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //Same as --> return state.concat([action.payload.data]); //Not mutating the state array but returns a new instance of state array
  }
  return state;
}
