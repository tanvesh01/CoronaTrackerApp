import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class India extends Component {
  state = {
    confirmed: null,
    deaths: null,
    recovered: null,
  };

  async componentDidMount() {
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const numbers = [];
    for (let x in this.state) {
      numbers.push(this.state[x]);
    }
    console.log(numbers);
    const data = {
      labels: ["confirmed", "deaths", "recovered"],
      datasets: [
        {
          label: "No. of people",
          backgroundColor: ["#c9b200", "red", "green"],
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 3,
          hoverBackgroundColor: "black",
          hoverBorderColor: "white",
          data: numbers,
        },
      ],
    };
    return (
      <div className="chart">
        <Bar data={data} options={{ responsive: true }} />
      </div>
    );
  }
}

export default India;
