import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { getComment } from "views/redux/actions/comment";
import { useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { getTour } from "views/redux/actions/tour";
// core components
// import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

function ManagerTour({ loading, getTour, tour }) {
  const classes = useStyles();
  useEffect(() => {
    getTour();
  }, []);
  const tableHead = ["Tên tour", "Tên công ty", "Mô tả", "Giá tiền", "Hành động"];
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Quản lý tour</h4>
          </CardHeader>
          <CardBody>
            <div className={classes.tableResponsive}>
              <Table className={classes.table}>
                <TableHead className={classes["primary" + "TableHeader"]}>
                  <TableRow className={classes.tableHeadRow}>
                    {tableHead.map((prop, key) => {
                      return (
                        <TableCell
                          className={
                            classes.tableCell + " " + classes.tableHeadCell
                          }
                          key={key}
                        >
                          {prop}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tour?.map((prop, key) => {
                    return (
                      <TableRow key={key} className={classes.tableBodyRow}>
                        <TableCell className={classes.tableCell} style = {{maxWidth:"100px"}}>
                          {prop.name}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {prop.company_id.name}
                        </TableCell>
                        <TableCell className={classes.tableCell} style = {{maxWidth:"300px"}}>
                          {prop.description}
                        </TableCell>
                        <TableCell className={classes.tableCell} style = {{maxWidth:"100px"}}>
                          {prop.price}
                        </TableCell>
                        <TableCell className={classes.tableCell} style= {{color:"red",paddingLeft:"30px"}}>
                          delete
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
function mapStateProps(state) {
  return {
    loading: state.tour.loading,
    tour: state.tour.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTour: () => dispatch(getTour()),
  };
}
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(ManagerTour)
);
