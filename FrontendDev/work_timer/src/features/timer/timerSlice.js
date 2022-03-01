import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paused: true,
}

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        pause: (state) => {
            state.paused = true;
        },
        resume: (state) => {
            state.paused = false;
        }
    }
})

export const { pause, resume } = timerSlice.actions;
export const selectPaused = (state) => state.timer.paused;
export default timerSlice.reducer;