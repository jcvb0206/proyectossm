import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../features/session/sessionSlice';
import userReducer from '../features/user/usersSlice';

export default configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
  },
});
