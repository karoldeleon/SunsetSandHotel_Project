import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    logo : "",
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,

  reducers: {
    fetchDataHotel(state, action) {
        state.name = action.payload.name;
        state.logo = action.payload.logo;
    },
  },
});

export const { fetchDataHotel } = hotelSlice.actions;
export default hotelSlice.reducer;   