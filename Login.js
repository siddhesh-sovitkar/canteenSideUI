import React, { Component } from "react";
import "./myStyles.css";
import { createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAlert } from "react-alert";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400"
    }
  },
  typography: {
    fontFamily: "Raleway, Arial"
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showInfoAlert: false,
      showSuccess: false
    };
  }

  sendInfo = async () => {
    const payload = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(payload);

    if (payload.username == "" || payload.password == "") {
      this.setState({ showInfoAlert: true });
    } else {
      axios.post("", { payload }).then(res => {
        //enter localhost url in axios post request above within ""
        console.log(res);
      });
    }
  };

  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div>
        <ThemeProvider theme={theme}>
          <AppBar position="static" style={{ minHeight: 60 }}>
            <Typography variant="h5" style={{ fontSize: 40 }}>
              <center>V-Canteen</center>
            </Typography>
          </AppBar>
          <br />
          <br />
          <br />
          <br />

          <center>
            <AccountCircleIcon color="primary" style={{ fontSize: 150 }} />
          </center>
          <center>
            <Typography variant="h5" style={{ fontColor: "grey" }}>
              Login
            </Typography>
          </center>
          <br />
          <br />
          <center>
            <TextField
              required
              label="enter UserName"
              color="primary"
              style={{ width: 300 }}
              onChange={event => {
                this.setState({ username: event.target.value });
                console.log(this.state.username);
              }}
            />
          </center>
          <br />
          <br />
          <center>
            <TextField
              required
              label="enter Password"
              color="primary"
              style={{ width: 300 }}
              type="password"
              onChange={event => {
                this.setState({ password: event.target.value });
                console.log(this.state.password);
              }}
            />
          </center>
          <br />
          <br />
          <br />
          <center>
            <Button color="primary" variant="contained" onClick={this.sendInfo}>
              Login
            </Button>
            <span>&emsp;&emsp;</span>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                this.setState({ showSuccess: true });
              }}
            >
              Forgot Password
            </Button>
          </center>
          <br />
          <Alert
            variant="danger"
            show={this.state.showInfoAlert}
            onClose={() => {
              this.setState({ showInfoAlert: false });
            }}
            dismissible
          >
            <Alert.Heading>Error!</Alert.Heading>
            <p> Please enter username and password first.</p>
          </Alert>
          <Alert
            variant="success"
            show={this.state.showSuccess}
            onClose={() => {
              this.setState({ showSuccess: false });
            }}
            dismissible
          >
            <Alert.Heading>Success</Alert.Heading>
            <p> Request sent successfully.</p>
          </Alert>
        </ThemeProvider>
      </div>
    );
  }
}

export default withAlert()(Login);
