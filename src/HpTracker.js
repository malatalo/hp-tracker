import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import PlayerBox from './PlayerBox';

const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: "#E9573F",
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



class HpTracker extends Component {

  componentWillMount = () => {
    this.setState({
      players: [
        { "hp": 21 },
        { "hp": 22 },
        { "hp": 23 },
        { "hp": 24 },
      ]
    })
    this.handleSelection(null, "2v");
  }

  handleSelection = (event, sel) => {
    if (sel === null) return;
    const select = sel.split("");
    const playerCount = parseInt(select[0], 10);
    const playerWidth = select[1] === "v" ? 12 : select[1] === "h" && playerCount === 4 ? 3 : 6;
    let paperHeight = "98%";

    if (playerCount === 4 && select[1] === "g") {
      paperHeight = "48%";
    } else if (playerCount === 2 && playerWidth === 6) {
      paperHeight = "98%";
    } else if (playerCount === 4 && playerWidth === 6) {
      paperHeight = "48%";
    } else if (playerCount === 2 && playerWidth === 12) {
      paperHeight = "48%";
    } else if (playerCount === 4 && playerWidth === 12) {
      paperHeight = "23%";
    }

    this.setState({
      selection: sel,
      playerWidth: playerWidth,
      playerCount: playerCount,
      paperHeight: paperHeight,
    });
  }

  handleHPChange = (id, amount) => {
    let players = [ ...this.state.players ];
    players[id] = {...players[id], hp: players[id].hp+amount};
    this.setState({ players });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container className={classes.bigbox}>
          <Grid item xs={12}>
            <Grid container spacing={16} className={classes.containerbox} alignItems={"center"} justify={"space-evenly"}>
              {[...Array(this.state.playerCount)].map((val, i) => (
                <PlayerBox id={i} 
                  player={this.state.players[i]} 
                  paperHeight={this.state.paperHeight} 
                  playerWidth={this.state.playerWidth} 
                  handleHPChange={this.handleHPChange} />
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Placeholder selector */}
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
            <ToggleButton value="4g">
              4g
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HpTracker);