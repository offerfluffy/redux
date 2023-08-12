// import ACTION_TYPES from "../actions/actionTypes";
import { createReducer } from "@reduxjs/toolkit";
import * as ActionCreators from "../actions/actionCreators";

const initialState = {
  tasks: [],
};

const taskReducer = createReducer(initialState, function (builder) {
  builder.addCase(ActionCreators.createTask.type, (state, action) => {
    const newTask = { id: Date.now(), body: action.payload, isDone: false };

    state.tasks.push(newTask);
  });
  builder.addCase(ActionCreators.deleteTask, (state, action) => {
    state.tasks = state.tasks.filter((task) => task.id !== action.payload);
  });
  builder.addCase(
    ActionCreators.updateTask,
    (state, { payload: { id, newValues } }) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === id);

      // state.tasks[taskIndex].isDone = newValues.isDone;
      for (const [key, value] of Object.entries(newValues)) {
        state.tasks[taskIndex][key] = value;
      }
    }
  );
});

// function taskReducer(state = initialState, action) {
//   switch (action.type) {
//     case ActionCreators.createTask.type: {
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           {
//             id: Date.now(),
//             body: action.payload,
//             isDone: false,
//           },
//         ],
//       };
//     }
//     case ActionCreators.deleteTask.type: {
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     }
//     case ActionCreators.updateTask.type: {
//       const {
//         payload: { id, newValues },
//       } = action;

//       return {
//         ...state,
//         tasks: state.tasks.map((task) => {
//           if (task.id !== id) {
//             return task;
//           }

//           return {
//             ...task,
//             ...newValues,
//           };
//         }),
//       };
//     }
//     default:
//       return state;
//   }
// }

export default taskReducer;

// Норм версия но есть слайсы