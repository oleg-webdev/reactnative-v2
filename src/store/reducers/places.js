import {ADD_PLACE, REMOVE_PLACE} from '../actions/actionTypes';

const initialState = {
  places: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, {
          key: new Date().getTime(),
          name: action.payload,
          image: { uri: 'https://goo.gl/wmkFDR' }
        }]
      };
    case REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.payload;
        })
      };
    default:
      return state;
  }
};

export default reducer;
