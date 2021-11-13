import React, { useState } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { editPerson, deletePerson } from "./../store/reducers/Person";

function Row(props) {
	const [expand, setExpand] = useState(false);

	function clickHandler(e) {
		if (!expand)
            setExpand(true);
	}

	function deleteHandler(e) {
		console.log("5");
	}

	function cancelHandler(e) {
		setExpand(false);
		console.log("5");
	}

	return (
		<div className="row" onClick={clickHandler}>
			{expand ? (
				<div className="bg">
					<div className="modal">
						<Form isForEdit={true} person={props.person} />
						<button className="btn delete" onClick={deleteHandler}>
							Delete
						</button>
						<button className="btn cancel" onClick={cancelHandler}>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<></>
			)}

			<div className="fname">{props.person.firstName}</div>
			<div className="lname">{props.person.lastName}</div>
			<div className="age">{props.person.age}</div>
			<div className="city">{props.person.city}</div>
		</div>
	);
}

const mapDispatchToProps = { editPerson, deletePerson };

export default connect(null, mapDispatchToProps)(Row);
