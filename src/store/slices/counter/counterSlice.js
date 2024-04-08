// Create State Slice Step 2
import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({ // Hook que devuelve un objeto
    name: 'counter',
    initialState: {
        counterValue: 10
    },
    reducers: {
        increment: (state) => {
            state.counterValue += 1
        },
        // es lo mismo que hacer return {...state, counter: state.counter + 1}
        decrement: (state) => {
            state.counterValue -= 1
        },
        incrementBy: (state , action) => { // action receive value of payload in dispatch
            // console.log(action)
            state.counterValue += action.payload;
        }
    }
})

export const {increment, decrement, incrementBy} = counterSlice.actions;