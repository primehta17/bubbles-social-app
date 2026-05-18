import {createSlice } from '@reduxjs/toolkit';

const initialState ={
  name:"",
  email:"",
  username:"",
  uid:""
};

const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    signInUser: (state,action)=>{
      state.name=action.payload.name
      state.email=action.payload.email
      state.username=action.payload.username
      state.uid=action.payload.uid
    },
    signOutUser: (state) =>{
      state.name=''
      state.email=''
      state.username=''
      state.uid=''
    }
  }
});

export const { signInUser, signOutUser} = userSlice.actions;

export default userSlice.reducer;