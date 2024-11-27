import { createSlice } from "@reduxjs/toolkit";

const initialMeetupsState = {
  meetups: [],
};

export const meetupsSlice = createSlice({
  name: "meetups",
  initialState: initialMeetupsState,
  reducers: {
    addMeetup: (state, action) => {
      state.meetups.push(action.payload);
    },
    setMeetups: (state, action) => {
      state.meetups = action.payload;
    },
  },
});

export const { addMeetup, setMeetups, removeMeetup } = meetupsSlice.actions;

export default meetupsSlice.reducer;

export const selectMeetups = (state) => state.meetups.meetups;