import React from "react";
import {Doughnut} from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
labels: ["Borne 1", "Borne 2", "Borne 3", "Borne 4", "Borne 5"],
datasets: [
    {
        label: "CA par Borne en euros",
        data: [50, 15, 20, 15, 150],
        borderColor: "#000000",
        backgroundColor: "#009344",
        borderwidth: 1,
    },
],
};

export const BarChart = () => {
return (
    <div>BarChart
        <Doughnut data={data}/>
<Bar data={data}/>
    </div>
)

}