import React, { useEffect } from "react";
import { connect } from "react-redux";
import PieChart from "./PieChart";
import Row from "./Row";
import { deletePerson, editPerson } from "./../store/reducers/Person";

function Chart(props) {
	useEffect(() => {
		console.log("chart component");
		console.log(props);
	});

	return (
		<div id="chart" className="chart">
			<div className="table">
				<div className="header row">
					<div className="fname">First Name</div>
					<div className="lname">Last Name</div>
					<div className="age">Age</div>
					<div className="city">City</div>
				</div>
				<div className="data">
					{props.persons ? (
						props.persons.map((person) => <Row person={person} />)
					) : (
						<div>There is no data ... </div>
					)}
				</div>
			</div>
			<PieChart />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		persons: state.person.persons,
	};
}

// function mapDispatchToProps(dispatch){
//     return{
//         editPerson: ()=>{dispatch(editPerson)}
//     }
// }

export default connect(mapStateToProps, null)(Chart);
