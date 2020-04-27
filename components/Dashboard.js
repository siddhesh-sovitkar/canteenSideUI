import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";



const styles = theme => ({
 
  root: {
    width: 310,
    height : 400,
    borderRadius : 16
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 34,
  },
  pos: {
    marginBottom: 12,
  }, 
  number:{
    fontSize : 150,
  } 
});

class Dashboard extends Component {



  render(){
    const { classes } = this.props;
    return(

      <div>
       <div style = {{padding : "30px"}}/>
       <div style = {{display : "flex"}}>
        <div style = {{padding : "30px"}}>
        <Card  className={classes.root} variant = "outlined">
          <CardContent>
           <Typography className = {classes.title}>
            <center>Today's Order Count</center>
           </Typography>
           <Typography className = {classes.number} color = "secondary">
             <center>50</center>
           </Typography>
          </CardContent>
        </Card>
        </div>
        <div style = {{padding : "30px"}}>
        <Card  className={classes.root} variant = "outlined">
          <CardContent>
           <Typography className = {classes.title}>
            <center>Today's Order Count</center>
           </Typography>
           <Typography className = {classes.number} color = "secondary">
             <center>50</center>
           </Typography>
          </CardContent>
        </Card>
        </div>
       </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Dashboard);
