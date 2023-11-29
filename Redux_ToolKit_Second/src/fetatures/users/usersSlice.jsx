import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, name: 'Muse Feta'},
    {id: 2, name: 'Feta Nbizo'},
    {id: 3, name: 'Tsige Menker'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users
export const {} = usersSlice.actions
export default usersSlice.reducer 