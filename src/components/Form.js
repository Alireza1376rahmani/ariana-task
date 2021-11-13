import React, { useEffect, useState } from "react";

function Form() {
	//   firstname
	const [firstName, setFirstName] = useState("");
	//   lastname
	const [lastName, setLastName] = useState("");
	//   age
	const [age, setAge] = useState("");
	//   city
	const [city, setCity] = useState("");

    function clearState(){
        setFirstName("");
        setLastName("");
        setAge("");
        setCity("");
    }

	function submitHandler(e) {
		e.preventDefault();
		const data = {
			firstName: firstName,
			lastName: lastName,
			age: age,
			city: city,
		};
        //? WORKING WITH STORE 
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

export default Form;
