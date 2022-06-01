import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sortType: {
        name:'популярности', 
        value: 'rating'
    }
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortType(state, action){
            console.log(action);
            
            state.sortType = action.payload
        }
    },
});

export const { setSortType} = sortSlice.actions;

export default sortSlice.reducer;
