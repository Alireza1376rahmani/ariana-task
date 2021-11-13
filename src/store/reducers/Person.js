import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const personSlice = createSlice({
	name: "person",
	initialState,
	reducers: {
		addPerson: (state, action) => {
            console.log("from addPerson in reducer :"+action.payload)
			state.push(action.payload);
		},
		editPerson: (state, action) => {
            console.log("from editPerson in reducer :" + action.payload);
        },
	},
});

export const { addPerson, editPerson } = personSlice.actions;
export default personSlice.reducer;
