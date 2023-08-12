import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const SLICE_NAME = "users";

const getUsers = createAsyncThunk(
  `${SLICE_NAME}/getUsers`,
  async (_, thunkAPI) => {
    try {
      const {
        data: { data: users },
      } = await API.getUsers();

      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = { users: [], isLoading: false, error: null };

const getUsersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: getUsersReducer } = getUsersSlice;

export { getUsers };

export default getUsersReducer;
