import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class GlobalChart extends Component {
  state = {
    numbers: [],
    time: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://covid19.mathdro.id/api/daily");
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const data = await res.json();
      const num = [];
      const time = [];
      for (let i = 0; i < data.length; i++) {
        num.push(data[i].totalConfirmed);
        time.push(data[i].reportDate);
      }
      this.setState({
        numbers: num,
        time: time,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.numbers);
    console.log(this.state.time);
    const data = {
      labels: this.state.time,
      datasets: [
        {
          label: "Dates",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "#ff111191",
          borderColor: "red",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,0)",
          pointBackgroundColor: "black",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.numbers,
        },
      ],
    };
    return (
      <div className="chart">
        <Line data={data} options={{ responsive: true }} />
      </div>
    );
  }
}

export default GlobalChart;
