
import Dashboard from "views/Dashboard.js";
import AboutUs from "views/AboutUs.js";
import Statistics from "views/Statistics.js";
import Feedback from "views/Feedback.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/statistics",
    name: "Statistics",
    icon: "tim-icons icon-align-center",
    component: Statistics,
    layout: "/admin"
  },
  {
    path: "/aboutus",
    name: "About Us",
    icon: "tim-icons icon-puzzle-10",
    component: AboutUs,
    layout: "/admin"
  },
  {
    path: "/feedback",
    name: "Feedback",
    icon: "tim-icons icon-single-02",
    component: Feedback,
    layout: "/admin"
  },

];
export default routes;
