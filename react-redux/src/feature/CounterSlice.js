import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name : 'counter', // name of slice 
  initialState : {
    value : 0 // starting value 
  }, 
  reducers : {
    increment : state => { // this is actions 
      state.value += 1; // 1st reducer logic of increment
    }, 
    decrement : state =>{
      state.value -= 1; // 2nd reducer logic of decrement 
    }, incrementByAmount : (state, action) =>{
      state.value += action.payload; // 3rd. reducer logic with state - action.payload;  -- payload m data hoga vo utna hi add ho jae ga 
      
    }
  }
})

export const {increment, decrement , incrementByAmount } = counterSlice.actions; 

export default counterSlice.reducer; 