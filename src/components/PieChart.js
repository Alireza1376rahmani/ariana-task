import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";

function PieChart(props) {
	const [data, setData] = useState(
		makeData(props.persons.map((p) => p.city))
	);
	const [allowChartUpdate, setAllowChartUpdate] = useState(false);
	const [options, setOptions] = useState({
		chart: {
			type: "pie",
		},
		title: {
			text: "My chart",
		},
		series: [
			{
				data: data,
			},
		],
	});

	function makeData(list) {
		let arr = [];
		for (let i = 0; i < list.length; i++) {
			let num = 1;
			for (let j = i + 1; j < list.length; j++) {
				if (list[i] === list[j]) {
					num++;
					list.splice(j, 1);
					console.log("yo");
					// j--;
				}
			}
			arr.push([list[i], num]);
		}
		console.log(arr);
		return arr;
	}

	useEffect(() => {
		setData(props.persons.map((p) => p.city));
		setAllowChartUpdate(true);
		console.log(data);
	}, [props.persons]);

	return (
		<div className="piechart">
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				allowChartUpdate={allowChartUpdate}
			/>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		persons: state.person.persons,
	};
}

export default connect(mapStateToProps, null)(PieChart);
