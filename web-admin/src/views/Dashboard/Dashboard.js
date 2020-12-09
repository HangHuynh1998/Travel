import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import login from "assets/img/login.jpg";
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
       <img src= {login} style = {{height:"500px", width:"1000px"}}/>
       
      </GridContainer>
    </div>
  );
}
