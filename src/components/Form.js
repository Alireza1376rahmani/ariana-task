import React, { useState } from "react";
import { connect } from "react-redux";
import { addPerson, editPerson } from "./../store/reducers/Person";

function Form(props) {
	//   firstname
	const [firstName, setFirstName] = useState(
		props.isForEdit ? props.person.firstName : ""
	);
	//   lastname
	const [lastName, setLastName] = useState(
		props.isForEdit ? props.person.lastName : ""
	);
	//   age
	const [age, setAge] = useState(props.isForEdit ? props.person.age : "");
	//   city
	const [city, setCity] = useState(props.isForEdit ? props.person.city : "");

	function clearState() {
		setFirstName("");
		setLastName("");
		setAge("");
		setCity("");
	}

	function submitHandler(e) {
		e.preventDefault();
		const newPerson = {
			firstName: firstName,
			lastName: lastName,
			age: age,
			city: city,
		};
		props.addPerson(newPerson);
		clearState();
	}

	function editHandler(e) {
		e.preventDefault();
		const newPerson = {
			id: props.person.id,
			firstName: firstName,
			lastName: lastName,
			age: age,
			city: city,
		};
		props.editPerson(newPerson);
	}

	return (
		<div id="form" className="form">
			<form
				action="/"
				onSubmit={props.isForEdit ? editHandler : submitHandler}
			>
				<input
					type="text"
					id="firstName"
					name="firstName"
					placeholder="firstName"
					value={firstName}
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
				/>
				<input
					type="text"
					id="lastName"
					name="lastName"
					placeholder="lastName"
					value={lastName}
					onChange={(e) => {
						setLastName(e.target.value);
					}}
				/>
				<input
					type="text"
					id="age"
					name="age"
					placeholder="age"
					value={age}
					onChange={(e) => {
						setAge(e.target.value);
					}}
				/>
				<input
					type="text"
					id="city"
					name="city"
					placeholder="city"
					value={city}
					onChange={(e) => {
						setCity(e.target.value);
					}}
				/>
				<input
					className="btn"
					type="submit"
					value={props.isForEdit ? "Edit" : "Submit"}
				/>
			</form>
		</div>
	);
}

const mapDispatchToProps = { addPerson, editPerson };

export default connect(null, mapDispatchToProps)(Form);
