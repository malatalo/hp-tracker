import React, { Component } from 'react';
import './HpTracker.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import PlayerBox from './PlayerBox';

const styles = theme => ({
    root: {
        flex: 1,
        height: "100%",
    },
    bigbox: {
        padding: 10,
        height: "100%",
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
        this.handleSelection(null, { p: 2, d: "v" });
    }

    handleSelection = (event, sel) => {
        if (sel === null) return;
        const playerWidth = sel.d === "v" ? 12 : sel.d === "h" && sel.p === 4 ? 3 : 6;
        let paperHeight = "98%";

        if (sel.p === 4 && sel.d === "g") {
            paperHeight = "48%";
        } else if (sel.p === 2 && playerWidth === 6) {
            paperHeight = "98%";
        } else if (sel.p === 4 && playerWidth === 6) {
            paperHeight = "48%";
        } else if (sel.p === 2 && playerWidth === 12) {
            paperHeight = "48%";
        } else if (sel.p === 4 && playerWidth === 12) {
            paperHeight = "23%";
        }

        this.setState({
            selection: sel,
            playerWidth: playerWidth,
            playerCount: sel.p,
            paperHeight: paperHeight,
            direction: sel.d,
        });
    }

    handleHPChange = (id, amount) => {
        let players = [...this.state.players];
        players[id] = { ...players[id], hp: players[id].hp + amount };
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
                                <PlayerBox key={i}
                                    id={i}
                                    player={this.state.players[i]}
                                    paperHeight={this.state.paperHeight}
                                    playerWidth={this.state.playerWidth}
                                    handleHPChange={this.handleHPChange}
                                    direction={this.state.direction} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                {/* Placeholder selector */}
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup value={this.state.selection} exclusive onChange={this.handleSelection}>
                        <ToggleButton value={{ p: 2, d: "h" }}>
                            2 horizontal
                        </ToggleButton>
                        <ToggleButton value={{ p: 4, d: "h" }}>
                            4 horizontal
                        </ToggleButton>
                        <ToggleButton value={{ p: 2, d: "v" }}>
                            2 vertical
                         </ToggleButton>
                        <ToggleButton value={{ p: 4, d: "v" }}>
                            4 vertical
                        </ToggleButton>
                        <ToggleButton value={{ p: 4, d: "g" }}>
                            4 h-grid
                        </ToggleButton>
                        <ToggleButton value={{ p: 4, d: "c" }}>
                            4 v-grid
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(HpTracker);