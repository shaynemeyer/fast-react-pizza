import { createSlice } from '@reduxjs/toolkit';
import { userState } from '../../types/user';

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: userState) => state.user.username;
