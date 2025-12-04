import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MembersState {
  isPremium: boolean;
}

const initialState: MembersState = {
  isPremium: false,
};

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setPremiumStatus: (state, action: PayloadAction<boolean>) => {
      state.isPremium = action.payload;
    },
  },
});

export const { setPremiumStatus } = memberSlice.actions;
export default memberSlice.reducer;
