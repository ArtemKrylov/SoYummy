import { RootState } from 'redux/store';

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => Boolean(state.auth.token);
