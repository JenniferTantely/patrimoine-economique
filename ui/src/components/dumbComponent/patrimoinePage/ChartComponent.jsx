import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function ChartComponent({ data, x }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const jours = [];
  for (let i = 0; i < data.length; i++) {
    jours.push(i * x);
  }

  data = {
    labels: jours,
    datasets: [
      {
        label: "Valeur des patrimoines",
        data: data,
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderColor: "black",
        borderWidth: 1,
        pointBackgroundColor: "black",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Jours",
        },
      },
      y: {
        title: {
          display: true,
          text: "Valeur des patrimoines",
        },
      },
    },
  };
  return (
    <div style={{height: "40vh" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ChartComponent;
