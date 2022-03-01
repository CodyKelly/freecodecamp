import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: {
    "break": 5,
    "session": 25,
  },
  enabled: true,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.enabled) state.values[action.payload] += 1;
    },
    decrement: (state, action) => {
      if (state.enabled && state.values[action.payload] > 1) state.values[action.payload] -= 1;
    },
    toggleEnable: (state) => {
      state.enabled = !state.enabled;
    }
  },
});

export const { increment, decrement, toggleEnable } = counterSlice.actions;
export const selectValues = (state) => state.counter.values;
export const selectEnabled = (state) => state.counter.enabled;
export default counterSlice.reducer;
