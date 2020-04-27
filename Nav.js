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
import NewOrders from "./NewOrders.js"
import Dashboard from "./Dashboard.js"
import CurrentOrders from "./CurrentOrders.js"

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400"
    },
    secondary: {
      main: "#ff4403"
    }
  },
  typography: {
    fontFamily: "Raleway, Arial"
  },
  tabs: {
    backgroundColor: "red"
  }
});

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      orderArray: []
    };
  }

  arrayCallback = (arr) => {
    var temp = this.state.orderArray
    temp.push(arr)
    this.setState({orderArray : temp });
  }

  render() {
    const { classes } = this.props;
    return (
      
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                onClick={() => {
                  this.setState({ drawerOpen: true });
                }}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">V-Canteen</Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Drawer
          anchor="left"
          variant="persistent"
          open={this.state.drawerOpen}
          onClose={() => {
            this.setState({ drawerOpen: false });
          }}
          classes={{ paper: classes.drawerPaper }}
        >
          <IconButton
            style={{ justifyContent: "flex-end" }}
            color="primary"
            onClick={() => {
              this.setState({ drawerOpen: false });
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Divider />
          <List>
            {["Dashboard", "New Orders", "Current Orders", "Ready Orders"].map(
              (text, index) => (
                <ListItem button key={text} onClick = {()=>{this.setState({ drawerOpen : false})}} component={Link} to={"/" + text}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        
        
        <main>
         
          <Switch>
            <Route exact path="/" render={() => <div>Home Page</div>} />
            <Route path="/Dashboard"  render = {() => <Dashboard/>} />
            <Route path="/New Orders" render = {() => <NewOrders parentCallback = {this.arrayCallback.bind(this)}/>} />
            <Route path="/Current Orders" render = {() => <CurrentOrders orderArray = {this.state.orderArray}/>} />
        </Switch>
        </main>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
