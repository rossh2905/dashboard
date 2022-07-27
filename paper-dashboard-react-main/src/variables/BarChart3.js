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

function BarChart2() {


 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  const labels = [
    "#1",
    "#1b",
    "#2",
    "#3",
    "#4",
    "#5",
    "#6",
    "#7"
  ]
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Ouv.',
        data: [1048, 958, 573, 853, 427, 625, 759, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Clics',
        data: [245, 154, 110, 104, 40, 60, 98, 0],
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

export default BarChart2;
