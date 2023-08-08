import ACTION_TYPES from "./actionTypes";

export const decrement = () => ({
  type: ACTION_TYPES.DECREMENT,
});

export const increment = () => ({
  type: ACTION_TYPES.INCREMENT,
});

export const changeStep = (newStep) => ({
  type: ACTION_TYPES.CHANGE_STEP,
  payload: newStep,
});

export const createTask = (taskText) => ({
  type: ACTION_TYPES.CREATE_TASK,
  payload: taskText,
});

export const deleteTask = (id) => ({
  type: ACTION_TYPES.DELETE_TASK,
  payload: id,
});

export const updateTask = ({ id, newValues }) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  payload: { id, newValues },
});
