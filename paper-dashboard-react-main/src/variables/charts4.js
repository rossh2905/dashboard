/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

const dashboardEmailStatisticsChart2 = {
  data: (canvas) => {
    return {
      labels: ["Envoi", "Ouverture", "Clic"],
      datasets: [
        {
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#FFBF00", "#EE4B2B", "#51CACF"],
          borderWidth: 0,
          data: [8450, 2142, 690],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: true },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const dashboardNASDAQChart = {
  data: (canvas) => {
    return {
      labels: [
        "2018-01",
        "2018-02",
        "2018-03",
        "2018-04",
        "2018-05",
        "2018-06",
        "2018-07",
        "2018-08",
        "2018-09",
        "2018-10",
        "2018-11",
        "2018-12",
        "2019-01",
        "2019-02",
        "2019-03",
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
      ],
      datasets: [
        {
          data: [2939, 3260, 3608, 4008, 4486, 4903, 5321, 5875, 6453, 6953, 7573, 8133, 8932, 9755, 10753, 11535, 12305, 13016, 13694, 14414, 15180, 16009, 16934, 17739, 18753, 19712, 20751, 22229, 23837, 25121],
          fill: false,
          borderColor: "#FFBF00",
          backgroundColor: "transparent",
          pointBorderColor: "#FFBF00",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [null, null, null, 8321, 8544, 9472, 9816, 10019, 10321, 10539, 10896, 11158, 11520, 11843, 12212, 12544, 13280, 13828, 14075, 14227, 14430, 14743, 14954, 15138, 15325, 15537, 15819, 16122, null, null],
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [null, null, null, null, null, null, null, null, null, null, null, 2115, 2184, 2250, 2267, 2318, 2342, 2392, 2404, 2426, 2441, 2453, 2461, 2468, 2472, 2486, 2496, 2511, 2531, 2539],
          fill: false,
          borderColor: "#EE4B2B",
          backgroundColor: "transparent",
          pointBorderColor: "#EE4B2B",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

const graphWeb = {
  data: (canvas) => {
    return {
      labels: [
        "2019-02",
        "2019-03",
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
      ],
      datasets: [
        {
          data: [10473, 13572, 15049, 13486, 12945, 10197, 9907, 11367, 13389, 11991, 10534, 10044, 9874, 12384, 12073, 8558, 6961],
          fill: false,
          borderColor: "#FFBF00",
          backgroundColor: "transparent",
          pointBorderColor: "#FFBF00",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [19085, 22377, 22259, 26086, 18153, 15027, 15155, 20642, 22708, 19498, 19058, 19494, 19565, 25253, 24761, 18622, 15266],
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart2,
  dashboardNASDAQChart,
  graphWeb,
};
