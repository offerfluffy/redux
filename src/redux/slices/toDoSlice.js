import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "toDo";

const initialState = {
  tasks: [],
};

const toDoSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createTask: (state, action) => {
      const newTask = { id: Date.now(), body: action.payload, isDone: false };

      state.tasks.push(newTask);
    },
    updateTask: (state, { payload: { id, newValues } }) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === id);

      // state.tasks[taskIndex].isDone = newValues.isDone;
      for (const [key, value] of Object.entries(newValues)) {
        state.tasks[taskIndex][key] = value;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

const { reducer: toDoReducer, actions } = toDoSlice;

export const { createTask, updateTask, deleteTask } = actions;

export default toDoReducer;
