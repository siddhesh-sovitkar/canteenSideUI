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
      drawerOpen: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
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
            {["Dashboard", "New Orders", "Placed Orders ", "Ready Orders"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <main>
          <div style={{ padding: "30px" }} />
          <div style={{ padding: "10px" }}>
            <Typography variant="h5" color="primary">
              NEW ORDERS ARRIVED :
            </Typography>
          </div>
          <List>
            {[
              "Dashboard",
              "New Orders",
              "Placed Orders ",
              "Ready Orders",
              "a",
              "b",
              "c"
            ].map((text, index) => (
              <Paper elevation={3}>
                <ListItem button key={text} style={{ padding: "30px" }}>
                  <ListItemText style={{ padding: "5px" }}>
                    <text>
                      {" "}
                      Order id: x
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                      Qty : y <br /> Order Name : XYZ <br /> Token no. xxx
                    </text>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <Button variant="outlined" color="primary">
                      Send to kitchen
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </Paper>
            ))}
          </List>
        </main>
      </ThemeProvider>
    );
  }
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
