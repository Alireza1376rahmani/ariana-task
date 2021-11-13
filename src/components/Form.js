import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addPerson } from "./../store/reducers/Person";

function Form(props) {
	//   firstname
	const [firstName, setFirstName] = useState("");
	//   lastname
	const [lastName, setLastName] = useState("");
	//   age
	const [age, setAge] = useState("");
	//   city
	const [city, setCity] = useState("");

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

	return (
		<div className="form">
			<form action="/" onSubmit={submitHandler}>
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
				<input type="submit" />
			</form>
		</div>
	);
}

const mapDispatchToProps = { addPerson };

export default connect(null, mapDispatchToProps)(Form);
