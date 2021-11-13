import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	persons: [
		{
			id: 1,
			firstName: "firstName1",
			lastName: "lastName1",
			age: "age1",
			city: "city1",
		},
		{
			id: 2,
			firstName: "firstName2",
			lastName: "lastName2",
			age: "age2",
			city: "city2",
		},
		{
			id: 3,
			firstName: "firstName3",
			lastName: "lastName3",
			age: "age3",
			city: "city3",
		},
	],
	lastId: 200,
};

function indexOf(arr, id) {
	return arr
		.map(function (p) {
			return p.id;
		})
		.indexOf(id);
}

const personSlice = createSlice({
	name: "person",
	initialState,
	reducers: {
		addPerson: (state, action) => {
			let person = { ...action.payload, id: ++state.lastId };
			state.persons.push(person);
		},
		editPerson: (state, action) => {
			console.log("from editPerson in reducer :" + action.payload);
			console.log(action.payload);

			let index = indexOf(state.persons, action.payload.id);
			state.persons[index] = { ...action.payload };
		},
		deletePerson: (state, action) => {
			let index = indexOf(state.persons, action.payload.id);
			state.persons.splice(index, 1);
		},
	},
});

export const { addPerson, editPerson, deletePerson } = personSlice.actions;
export default personSlice.reducer;
