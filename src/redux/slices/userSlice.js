import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const SLICE_NAME = "user";

// можно делать асихронные функции
const createUser = createAsyncThunk(
  `${SLICE_NAME}/createUser`,
  async (userData, thunkAPI) => {
    try {
      const {
        data: { data: user },
      } = await API.createUser(userData);

      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// createUser.pending / .fulfilled / .rejected это наши actionCreators которые делаются автоматоически

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  // вместо reducers extraReducers для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload); // данные из API.createUser(userData) пропихиваются сюда в payload
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // ошибка идет через thunkAPI.rejectWithValue(err) в payload
    });
  },
});

const { reducer: userReducer } = userSlice;

export { createUser };

export default userReducer;
