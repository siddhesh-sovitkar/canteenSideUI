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






const styles = theme => ({
  root : {
    borderRadius : 5,
  }
})

class CurrentOrders extends Component{

  constructor(props){
    super(props)
    this.state = {
      orderData : [],
      newData : []
    }
  }

  componentDidMount = async () => {
    if(this.props.orderArray != null){
      var temp = this.props.orderArray
      this.setState({orderData : temp })
    }

    //var old = this.state.orderData
    console.log(this.state.orderData)
  }

  componentDidUpdate = () =>{

  }
  
  render(){
    const {classes} = this.props
    return(
      <div>
      <div style={{ padding: "30px" }} />
      <div style={{ padding: "10px" }}>
      <Typography variant="h5" color="primary">
              CURRENT ORDERS UNDER PROCESS :
      </Typography>
      </div>
      <List>
            {this.state.orderData.map((order, index) => (
              <Paper elevation={3} className = {classes.root}>
                <ListItem  key={order.OrderId} style={{ padding: "30px" }}>
                  <ListItemText style={{ padding: "15px" }}>
                    <text>
                      {" "}
                      Order id: {order.OrderId}
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                      Qty : {order.Qty} <br /> Order Name : {order.OrderSummary} <br /> Token no.: {order.TokenNo}
                    </text>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <Button variant="outlined" type = "button"  color="primary">
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

CurrentOrders.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CurrentOrders);
