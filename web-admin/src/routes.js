/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import ManagerCustomer from "views/ManagerCustomer/ManagerCustomer";
import ManagerCompany from "views/ManagerCompany/ManagerCompany";
import ManagerComment from "views/ManagerComment/ManagerComment";
import ManagerTour from "views/ManageTour/ManagerTour";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Quản lý thông tin",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/managerCustomer",
    name: "Quản lý khách hàng",
    icon: "content_paste",
    component: ManagerCustomer,
    layout: "/admin"
  },
  {
    path: "/managerCompany",
    name: "Quản lý công ty",
    icon: "content_paste",
    component: ManagerCompany,
    layout: "/admin"
  },
  {
    path: "/managerTour",
    name: "Quản lý tour",
    icon: "content_paste",
    component: ManagerTour,
    layout: "/admin"
  },
  {
    path: "/managerComment",
    name: "Quản lý đánh giá",
    icon: "content_paste",
    component: ManagerComment,
    layout: "/admin"
  },


];

export default dashboardRoutes;
