import { createSlice } from "@reduxjs/toolkit"

const initialState = {
keywords:'',
permission:'No',
}

const filterReducerXD = createSlice({
  name:'filter',
  initialState,
  reducers:{
    filterChange (state, action) {
        if(action.payload != '')
          {
          state.keywords = action.payload
          state.permission = 'Yes'
          }
        else
          {
          state.keywords = ''
          state.permission = 'No'
          }
    }
  }
})

export const {filterChange} = filterReducerXD.actions

export default filterReducerXD.reducer