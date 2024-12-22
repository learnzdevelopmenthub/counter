import { configureStore } from "@reduxjs/toolkit";

const reducer = (state = { count: 0 }, action) => {
    if(action.type === 'INCREMENT') {
        return { count: state.count + action.payload }
    }
    return state;
}

const store = configureStore({
    reducer,
})

export default store;