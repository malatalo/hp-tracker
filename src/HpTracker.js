import React, { Component } from 'react';
import './HpTracker.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PlayerBox from './PlayerBox';
import FormBelow from './FormBelow';

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

    constructor(props) {
        super(props);
        this.state = {
            players: [
                { "hp": 20 },
                { "hp": 20 },
                { "hp": 20 },
                { "hp": 20 },
            ],
            playerCount: "2",
            stacking: "horizontal",
            direction: "row-reverse",
        }
    }

    componentWillMount = () => {
        this.reCalc();
    }

    reCalc = () => {
        let pc = parseInt(this.state.playerCount, 10);
        let st = this.state.stacking;

        let paperHeight, paperWidth;

        if (pc === 1) {
            paperHeight = 98;
            paperWidth = 12;
        } else if (pc === 2) {
            if (st === "horizontal") {
                paperHeight = 48;
                paperWidth = 12;
            } else {
                paperHeight = 98;
                paperWidth = 6;
            }
        } else {
            if (st === "vertical") {
                paperHeight = 23;
                paperWidth = 12;
            } else if (st === "horizontal") {
                paperHeight = 100;
                paperWidth = 3;
            } else {
                paperHeight = 48;
                paperWidth = 6
            }
        }

        this.setState({
            paperWidth: paperWidth,
            paperHeight: paperHeight,
        });
    }

    handleHPChange = (id, amount) => {
        let players = [...this.state.players];
        if (id === 99) {
            players.map((p, i) => {
                players[i] = { ...players[i], hp: amount };
            })
        } else {
            players[id] = { ...players[id], hp: players[id].hp + amount };
        }

        this.setState({ players });
    }

    handleForm = name => event => {
        this.setState({ [name]: event.target.value }, () => this.reCalc());
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.bigbox}>
                    <Grid item xs={12}>
                        <Grid container spacing={16} className={classes.containerbox} alignItems={"center"} justify={"space-evenly"}>
                            {[...Array(parseInt(this.state.playerCount, 10))].map((val, i) => (
                                <PlayerBox key={i}
                                    id={i}
                                    player={this.state.players[i]}
                                    paperHeight={this.state.paperHeight}
                                    paperWidth={this.state.paperWidth}
                                    handleHPChange={this.handleHPChange}
                                    direction={this.state.direction} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <FormBelow
                    playerCount={this.state.playerCount}
                    stacking={this.state.stacking}
                    direction={this.state.direction}
                    handleForm={this.handleForm}
                    handleHPChange={this.handleHPChange} />

            </div>
            );
        }
    }
    
export default withStyles(styles)(HpTracker);