import React, { useEffect } from "react";
import { connect } from "react-redux";

function Chart(props) {


useEffect(()=>{
    console.log("chart component")
    console.log(props)
    
})


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
						props.persons.map((person) => (
							<div className="row">
								<div className="fname">{person.firstName}</div>
								<div className="lname">{person.lastName}</div>
								<div className="age">{person.age}</div>
								<div className="city">{person.city}</div>
							</div>
						))
					) : (
						<div>There is no data ... </div>
					)}
				</div>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		persons: state.person.persons,
	};
}

export default connect(mapStateToProps, null)(Chart);
