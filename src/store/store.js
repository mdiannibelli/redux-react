// Create Store Step 1
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/'
import {pokemonSlice} from './slices/pokemon'

export const store = configureStore({
  // Import the reducer function Step 4
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})