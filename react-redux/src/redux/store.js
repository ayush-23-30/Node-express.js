import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../feature/CounterSlice";


export const store = configureStore({
reducer : {
    counter : counterReducer
}
})

// configureStore -- store bana liya 
// store k ander reducer maga liya hai jo ki slice m banya hoga humne 