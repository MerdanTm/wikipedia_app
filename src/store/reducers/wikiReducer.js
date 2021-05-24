import { CLEAR, SEND } from "../actions/fetchWiki";

export const initialState = ["", [], [], []];

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SEND:
      return action.payload;
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
