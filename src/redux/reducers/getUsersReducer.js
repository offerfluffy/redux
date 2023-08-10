import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export default function getUsersReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.GET_USERS_SUCCESS:
      const {
        payload: { users },
      } = action;
      // console.log('Reducer:', users)
      return {
        ...state,
        isLoading: false,
        users: users,
        error: null,
      };
    case ACTION_TYPES.GET_USERS_ERROR:
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return state;
  }
}
