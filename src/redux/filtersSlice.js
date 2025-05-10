import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,

  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
