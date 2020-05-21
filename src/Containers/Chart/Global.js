import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class GlobalChart extends Component {
    state = {
        numbers: [],
        time: [],
        deaths: [],
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
            const deaths = [];
            for (let i = 0; i < data.length; i++) {
                num.push(data[i].totalConfirmed);
                time.push(data[i].reportDate);
                deaths.push(data[i].deaths.total);
            }
            this.setState({
                numbers: num,
                time: time,
                deaths: deaths,
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.state.deaths);
        const data = {
            labels: this.state.time,
            datasets: [
                {
                    label: "Confirmed",
                    fill: false,
                    lineTension: 3,
                    //backgroundColor: "",
                    borderColor: "#ffda0099",
                    // borderCapStyle: "butt",
                    // borderDash: [],
                    // borderDashOffset: 0.0,
                    borderJoinStyle: "round",
                    pointBorderColor: "rgba(75,192,192,0)",
                    // pointBackgroundColor: "black",
                    pointBorderWidth: 0,
                    pointHoverRadius: 5,
                    // pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    // pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 0.1,
                    pointHitRadius: 20,
                    data: this.state.numbers,
                },
                {
                    label: "Deaths",
                    fill: false,
                    borderColor: "#ff00008f",
                    data: this.state.deaths,
                },
            ],
        };
        return (
            <div className="chart">
                <Line
                    data={data}
                    options={{
                        responsive: true,
                        title: {
                            display: true,
                            text: "Number of confirmed and death cases per day",
                            fullWidth: true,
                        },
                    }}
                />
            </div>
        );
    }
}

export default GlobalChart;
