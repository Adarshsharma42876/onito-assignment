import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../utils/types';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const userIdToDelete = action.payload;


      const indexToDelete = state.users.findIndex(user => user.id === userIdToDelete);


      if (indexToDelete !== -1) {
     
        state.users.splice(indexToDelete, 1);
      } else {
        console.error(`User with ID ${userIdToDelete} not found for deletion`);
      }},
      setUsers: (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      },
  },
  
});

export const { addUser,deleteUser,setUsers } = userSlice.actions;
export default userSlice.reducer;
