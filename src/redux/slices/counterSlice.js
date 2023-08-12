import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "counter";

const initialState = {
  counter: 1,
  step: 1,
};

const counterSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + state.step;
    },
    decrement: (state) => {
      state.counter = state.counter - state.step;
    },
    changeStep: (state, { payload: step }) => {
      state.step = step;
    },
  },
});

const { reducer: counterReducer, actions } = counterSlice;

export const { increment, decrement, changeStep } = actions;

export default counterReducer;
