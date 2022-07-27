import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function BarChart() {


 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  const labels = [
    "2019-04",
    "2019-05",
    "2019-06",
    "2019-07",
    "2019-08",
    "2019-09",
    "2019-10",
    "2019-11",
    "2019-12",
    "2020-01",
    "2020-02",
    "2020-03",
    "2020-04",
    "2020-05",
    "2020-06",
  ]
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Ventes (CA)',
        data: [11440, 4600, 17210, 4208, 7998, 3566, 17288, 5094, 9604, 5788, 7514, 9206, 9600, 9834, 5470],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Revenus',
        data: [9312, 5070, 15268, 3106, 8332, 3900, 12740, 7599, 7536, 7792, 8850, 9206, 8520, 10104, 5740],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <>
      <div className="content">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default BarChart;
