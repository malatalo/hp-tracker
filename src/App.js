import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: "#E9573F",
    height: "100%",
  },
  paper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
  },
  bigbox: {
    padding: 10,
    height: "100%",
  },
  splitbox: {
  },
  containerbox: {
    height: "100%",
  },
});



class App extends Component {

  componentWillMount = () => {
    this.handleSelection(null, "2v");
  }

  handleSelection = (event, sel) => {
    if (sel === null) return;
    const select = sel.split("");
    const playerCount = select[0];
    const playerWidth = select[1] === "v" ? 12 : 6;
    let paperHeight = "100%";

    if (playerCount === "2" && playerWidth === 6) {
      paperHeight = "99%";
    } else if (playerCount === "4" && playerWidth === 6) {
      paperHeight = "49%";
    } else if (playerCount === "2" && playerWidth === 12) {
      paperHeight = "48%";
    } else if (playerCount === "4" && playerWidth === 12) {
      paperHeight = "23%";
    }

    this.setState({
      selection: sel,
      playerWidth: playerWidth,
      playerCount: playerCount,
      paperHeight: paperHeight,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container className={classes.bigbox}>
          <Grid item xs={12}>
            <Grid container spacing={24} className={classes.containerbox} alignItems={"stretch"} justify={"space-evenly"}>
              {[...Array(parseInt(this.state.playerCount))].map(value => (
                <Grid key={value} item xs={this.state.playerWidth} style={{ height: this.state.paperHeight }}>
                  <Paper className={classes.paper} style={{ paddingTop: 10, paddingBottom: 10, height: "100%" }}>
                    {`Cell ${value + 1}`}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup value={this.state.selection} exclusive onChange={this.handleSelection}>
            <ToggleButton value="2h">
              2h
            </ToggleButton>
            <ToggleButton value="4h">
              4h
            </ToggleButton>
            <ToggleButton value="2v">
              2v
            </ToggleButton>
            <ToggleButton value="4v">
              4v
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
