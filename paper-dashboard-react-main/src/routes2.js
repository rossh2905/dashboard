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
import Dashboard2 from "views/Dashboard2.js";
import Operation1 from "views/Operation1";
import Operation2 from "views/Operation2";
import Bilan from "views/Bilan";

var routes2 = [
  {
    path: "/dashboard2",
    name: "Dashboard",
    icon: "nc-icon nc-app",
    component: Dashboard2,
    layout: "/myadmin",
  },
  {
    path: "/operation1",
    name: "Opération 1",
    icon: "nc-icon nc-chart-bar-32",
    component: Operation1,
    layout: "/myadmin",
  },
  {
    path: "/operation2",
    name: "Opération 2",
    icon: "nc-icon nc-chart-pie-36",
    component: Operation2,
    layout: "/myadmin",
  },
  {
    path: "/bilan",
    name: "Bilan opérations",
    icon: "nc-icon nc-single-copy-04",
    component: Bilan,
    layout: "/myadmin",
  },
];
export default routes2;
