import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,

  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload;
    },
    changeNumberFilter: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { changeNameFilter, changeNumberFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
