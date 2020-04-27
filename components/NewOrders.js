import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { orange, pink, green } from "@material-ui/core/colors";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";



const data = [
  {
    "OrderId" : "1",
    "OrderSummary" : "Hakka Noodles",
    "TokenNo" : "120",
    "Qty" : "1"
  },
  {
    "OrderId" : "2",
    "OrderSummary" : "Schezwan Rice",
    "TokenNo" : "121",
    "Qty" : "2" 
  },
  {
    "OrderId" : "3",
    "OrderSummary" : "Spcl South Dosa",
    "TokenNo" : "122",
    "Qty" :  "3"
  },
  {
    "OrderId" : "4",
    "OrderSummary" : "Spcl Mysore Dosa",
    "TokenNo" : "123",
    "Qty" : "1" 
  }
];


const styles = theme => ({
  root : {
    borderRadius : 5,
  }
})

class NewOrders extends Component{

constructor(props){
  super(props)
  this.state = {
    orderData : data,
    sentData : []
  }
}

  SendToKitchen = (order) => {
    console.log(order)
    var ele = order
    //var temp = this.state.sentData
    //.push(ele)
    this.props.parentCallback(ele)
    var array = this.state.orderData
    var index = array.indexOf(ele)
    array.splice(index,1)
    console.log(array) 
    //this.setState({sentdata : temp})
    //console.log("sentdata:")
    //console.log(this.state.sentData)
  };

  render(){
    const {classes} = this.props
    return(
      <div>
      <div style={{ padding: "30px" }} />
      <div style={{ padding: "10px" }}>
      <Typography variant="h5" color="primary">
              NEW ORDERS ARRIVED :
      </Typography>
      </div>
      <List>
            {this.state.orderData.map((order, index) => (
              <Paper elevation={3} className = {classes.root}>
                <ListItem  key={order} style={{ padding: "30px" }}>
                  <ListItemText style={{ padding: "15px" }}>
                    <text>
                      {" "}
                      Order id: {order.OrderId}
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                      Qty : {order.Qty} <br /> Order Name : {order.OrderSummary} <br /> Token no.: {order.TokenNo}
                    </text>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <Button variant="outlined" type = "button" onClick = { this.SendToKitchen.bind(this,order)} color="primary">
                      Send to kitchen
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </Paper>
            ))}
     </List>
     </div>
    )
  }
}

NewOrders.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewOrders);
