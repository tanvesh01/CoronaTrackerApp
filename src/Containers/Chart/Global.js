import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";

class GlobalChart extends Component {
    state = {
        numbers: [],
        time: [],
        deaths: [],
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
        window.addEventListener("resize", this.setScreenOrientation);
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
        const data = {
            labels: this.state.time,
            datasets: [
                {
                    label: "Confirmed",
                    fill: true,
                    backgroundColor: "#fff7001f",
                    borderColor: "#e0c03d",
                    display: false,
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
                    fill: true,
                    backgroundColor: "#de3936bf",
                    borderColor: "#ff00008f",
                    pointBorderColor: "rgba(75,192,192,0)",
                    // pointBackgroundColor: "black",
                    pointBorderWidth: 0,
                    pointHoverRadius: 5,
                    // pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    // pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 0.1,
                    pointHitRadius: 20,
                    data: this.state.deaths,
                },
            ],
        };
        let chart = (
            <Line
                data={data}
                options={{
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: "Number of confirmed and death cases per day",
                        fullWidth: true,
                    },
                }}
            />
        );
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

export default GlobalChart;
