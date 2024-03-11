import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  modalText: "",
  routePath: "",
};

export const stateModalSlice = createSlice({
  name: "stateModal",
  initialState,
  reducers: {
    modalTextChange: (state, action) => {
      state.isModal = !state.isModal;
      state.modalText = action.payload;
    },
    modalRoutePath: (state, action) => {
      state.routePath = action.payload;
    },
  },
});

export const { modalTextChange, modalRoutePath } = stateModalSlice.actions;
export default stateModalSlice.reducer;
