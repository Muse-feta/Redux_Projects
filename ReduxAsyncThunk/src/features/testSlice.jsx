import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getData = createAsyncThunk('test/fetchData', async (args, { rejectWithValue}) => {
    try {
        const response = await axios.get('https://baconipsum.com/api/?type=meat-and-filler');
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const testSlice = createSlice({
  name: "test",
  initialState: {
    data: [],
    isSuccess: false,
    message: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
        state.data.push(action.payload)
    })
    builder.addCase(getData.pending, (state, action) => {
        state.message = action.payload
    })
  }
});

export default testSlice.reducer