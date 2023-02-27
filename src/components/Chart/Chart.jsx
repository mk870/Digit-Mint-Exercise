import React from "react";
import "./ChartStyles.css";
import { Scatter } from "react-chartjs-2";

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
import { generateRandomColor } from "./Utils/generateRandomColor";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartData }) => {
  const datasets = [];
  const labels = {};
  for (let i = 0; i < chartData.length; i++) {
    if (chartData[i].name in labels === false) {
      let color = generateRandomColor();
      datasets.push({
        data: [{ x: +chartData[i].distance, y: chartData[i].co2Levels }],
        backgroundColor: color,
        label: chartData[i].name,
        fill: true,
        pointBorderColor: color,
        pointBackgroundColor: color,
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: color,
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
      });
      labels[chartData[i].name] = "exists";
    } else {
      datasets.forEach((prop) => {
        if (prop.label === chartData[i].name) {
          prop.data.push({
            x: +chartData[i].distance,
            y: chartData[i].co2Levels,
          });
        }
      });
    }
  }
  const data = {
    datasets,
  };
  ChartJS.defaults.color = "white";
  ChartJS.defaults.borderColor = "white";
  ChartJS.defaults.backgroundColor = "white";
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "black",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let index = context.dataIndex;
            let label = context.dataset.label;
            let x = `${context.dataset.data[index].x}km`;
            let y = `${context.dataset.data[index].y}g`;
            return `${label}: (${x},${y})`;
          },
        },
      },
    },
    scales: {
      xAxis: {
        stacked: true,
        display: true,
        grid: {
          display: true,
          tickColor: "black",
          tickWidth: 1,
        },
        title: {
          display: true,
          text: "Distance in KM",
          color: "black",
          font: {
            size: 19,
            family: "sans-serif",
          },
        },
        ticks: {
          color: "black",
        },
        border: {
          display: true,
          color: "black",
          width: 1,
        },
      },
      yAxis: {
        display: true,
        drawOnChartArea: true,
        grid: {
          display: true,
          tickColor: "black",
          tickWidth: 1,
        },
        title: {
          display: true,
          text: "CO2 Emissions in g",
          color: "black",
          font: {
            size: 19,
            family: "sans-serif",
          },
        },
        ticks: {
          color: "black",
        },
        border: {
          display: true,
          color: "black",
          width: 1,
        },
      },
    },
  };
  return datasets.length > 0 && <Scatter data={data} options={options} />;
};

export default React.memo(Chart);
