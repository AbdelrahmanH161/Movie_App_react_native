import {createSlice } from '@reduxjs/toolkit';

const favslice = createSlice({
    name:"fav",
    initialState:{favmovielist:[]},
    reducers:{
        addfavmovie:(state,action)=>
        {
            const x = state.favmovielist.find((item)=>item.id === action.payload.id);
            if(x){
                state.favmovielist=[...state.favmovielist]
            }else{
                state.favmovielist.push(action.payload);
            }
        },
        removefavmovie:(state,action)=>{
            state.favmovielist.splice(action.payload, 1);
        },
    },
})

export const{addfavmovie,removefavmovie}=favslice.actions;

export default favslice.reducer;