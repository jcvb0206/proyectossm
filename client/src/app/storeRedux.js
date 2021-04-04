import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../features/session/sessionSlice';
import usersReducer from '../features/user/usersSlice';

export default configureStore({
  reducer: {
    sessions: sessionReducer,
    users: usersReducer,
  },
});
