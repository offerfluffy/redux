import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks: [{ id: 0, body: "some text", isDone: false }],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            body: action.payload,
            isDone: false,
          },
        ],
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const {
        payload: { id, newValues },
      } = action;

      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== id) {
            return task;
          }

          return {
            ...task,
            ...newValues,
          };
        }),
      };
    }
    default:
      return state;
  }
}

export default taskReducer;
