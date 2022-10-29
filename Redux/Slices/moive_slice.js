import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


 export const getmovies= createAsyncThunk("",()=>{
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=098c97ee9a8560eb235a5ec776ab6caf&language=en-US').then(
        (response)=>{
            return response.data.results
        }
    )
 })

const movieslice = createSlice({
    name:"moive",
    initialState:{movielist:[]},
    reducers:{
    },
    extraReducers:(bulider)=>{
        bulider.addCase(getmovies.fulfilled, (state, action) => {
            state.movielist = action.payload
        })
    }
    
})

export const{addfav}=movieslice.actions;

export default movieslice.reducer;