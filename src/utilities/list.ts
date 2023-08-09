import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface listItem {
    title: string,
    complete: boolean
}

interface listItems {
    list: listItem[]
}

const initialState: listItems = {
    list: []
}

export const ListSlice = createSlice({
    name: 'List',
    initialState,
    reducers: {
        listItemAction: (state, action: PayloadAction<string>) => {
            if (state.list.find(i => i.title === action.payload)) state.list = state.list.filter(i => i.title !== action.payload)
            else state.list.unshift({title: action.payload, complete: false})
        }
    }
})


export default ListSlice.reducer
export const {listItemAction} = ListSlice.actions