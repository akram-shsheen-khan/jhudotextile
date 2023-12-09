import { getToken } from "@/utils/globalFunctions"
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

const initialState = {
    value:{
        token:getToken()
    }
}

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{}
})

export default auth.reducer