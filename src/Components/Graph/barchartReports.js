import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarchartReports() {
  const data = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Others"],
    datasets: [
      {
        label: "",
        data: [11, 28, 30, 10, 10, 20],
        backgroundColor: ["aqua", "green", "red", "brown", "yellow", "black"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        label: {
          display: true,
        },
        ticks: {
          autoSkip: false,
        },
        stacked: true,
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        stacked: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 20,
        width: 1,
      },
    },
  };

  return (
    <div>
      <div style={{ padding: "40px", width: "90%" }}>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default BarchartReports;
