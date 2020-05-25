import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Bar } from "react-chartjs-2";

class India extends Component {

	state = {
		confirmed: null,
		deaths: null,
		recovered: null,

	};

	setScreenOrientation = () => {
		if (window.matchMedia("(orientation: portrait)").matches) {
			this.setState({
				screen: "portrait",
			});
		} else if (window.matchMedia("(orientation: landscape)").matches) {
			this.setState({
				screen: "landscape",
			});
		}
	};

	async componentDidMount() {
		//window.addEventListener("resize", this.setScreenOrientation);
		try {
			const res = await fetch("https://covid19.mathdro.id/api/countries/IN");
			if (!res.ok) {
				throw Error(res.statusText);
			}
			const data = await res.json();
			const confirmed = data.confirmed.value;
			const recovered = data.recovered.value;
			const deaths = data.deaths.value;
			this.setState({
				confirmed: confirmed,
				deaths: deaths,
				recovered: recovered,
			});

		} catch (error) {
			console.log(error);
		}
	}

	render() {
		window.addEventListener("resize", this.setScreenOrientation);
		const numbers = [];
		for (let x in this.state) {
			numbers.push(this.state[x]);
		}
		const data = {
			labels: ["confirmed", "deaths", "recovered"],
			datasets: [
				{

					label: "No. of people",
					backgroundColor: ["#fff7006e", "#de3936bf", "#41d663b3"],
					borderColor: ["#e0c03d", "#db3735", "#069f58"],
					borderWidth: 3,
					hoverBorderColor: "white",
					data: numbers,
				},
			],
		};
		let chart = <Bar key="1" data={data} options={{ responsive: true, }} />;
		if (window.matchMedia("(orientation: portrait)").matches) {
			chart = (
				<Typography gutterBottom variant="h5" component="h2">
					Please Rotate your device!
				</Typography>
			);
		}
		return <div className="chart">{chart}</div>;
	}
}

export default India;
