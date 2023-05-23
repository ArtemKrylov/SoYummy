import { RootState } from 'redux/store';

export const selectCurrentUser = (state: RootState) => state.auth.user;
