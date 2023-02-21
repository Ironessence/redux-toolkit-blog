import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Dude One' },
  { id: '1', name: 'Dude TWO' },
  { id: '2', name: 'Dude THREE' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
