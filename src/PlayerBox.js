import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "100%",
    },
});

class PlayerBox extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid key={this.props.id} item xs={this.props.playerWidth} style={{ height: this.props.paperHeight }}>
                <Paper className={classes.paper} style={{ paddingTop: 10, paddingBottom: 10, height: "100%" }}>
                    {`Player ${this.props.id}`}<br /><br /><br />
                    <button onClick={()=>this.props.handleHPChange(this.props.id,-1)}>-</button>
                    {`HP ${this.props.player.hp}`}
                    <button onClick={()=>this.props.handleHPChange(this.props.id,1)}>+</button>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(PlayerBox);