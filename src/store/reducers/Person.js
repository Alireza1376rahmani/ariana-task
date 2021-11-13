import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	persons: [
		{
			firstName: "firstName1",
			lastName: "lastName1",
			age: "age1",
			city: "city1",
		},
		{
			firstName: "firstName2",
			lastName: "lastName2",
			age: "age2",
			city: "city2",
		},
		{
			firstName: "firstName3",
			lastName: "lastName3",
			age: "age3",
			city: "city3",
		},
	],
};

const personSlice = createSlice({
	name: "person",
	initialState,
	reducers: {
		addPerson: (state, action) => {
            console.log("from addPerson in reducer :"+action.payload)
            console.log(action.payload)
			state.persons.push(action.payload);
            console.log("after push")
            console.log(state.data)
		},
		editPerson: (state, action) => {
            console.log("from editPerson in reducer :" + action.payload);
            console.log(action.payload);
        },
	},
});

export const { addPerson, editPerson } = personSlice.actions;
export default personSlice.reducer;
