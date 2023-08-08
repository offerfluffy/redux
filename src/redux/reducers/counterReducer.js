import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  counter: 1,
  step: 1,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return {
        ...state,
        counter: state.counter + state.step,
      };
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        ...state,
        counter: state.counter - state.step,
      };
    }
    case ACTION_TYPES.CHANGE_STEP: {
      return {
        ...state,
        step: action.payload,
      };
    }
    default:
      return state;
  }
}

export default counterReducer;
