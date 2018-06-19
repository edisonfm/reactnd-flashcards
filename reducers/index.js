import { FETCH_DECKS_SUCCESS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS_SUCCESS: {
      return { ...state, ...action.decks };
    }

    default:
      return state;
  }
}
