import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URI } from '../../app/config';

export const fetchSignup = createAsyncThunk(
  'session/fetchSignup',
  async (formData) => {
    console.log(formData);
    const response = await fetch(`${BASE_URI}/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { user: data };
  }
);

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
    status: '',
    errors: {},
  },
  extraReducers: {
    [fetchSignup.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchSignup.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.profile = action.payload.user;
    },
    [fetchSignup.rejected]: (state, action) => {
      state.status = 'failed';
      state.errors = JSON.parse(action.error.message);
    },
  },
});

export const selectorStatus = (state) => state.users.status;
export const selectorProfile = (state) => state.users.profile;

export default usersSlice.reducer;
