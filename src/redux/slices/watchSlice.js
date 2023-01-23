import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWatches = createAsyncThunk(
  "watch/fetchWatchesStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const res = await axios.get(
      `https://6399e68f16b0fdad774d67dc.mockapi.io/photo_collections?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

export const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers:{
    [fetchWatches.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchWatches.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchWatches.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  }
});

export const selectWatchData = (state) => state.watch

export const { setItems } = watchSlice.actions;

export default watchSlice.reducer;
