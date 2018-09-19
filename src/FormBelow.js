import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        background: '#ffffff',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class FormBelow extends Component {

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.container}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="subheading">
                            Click the numbers above to rotate them
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Players</FormLabel>
                            <RadioGroup
                                aria-label="count"
                                className={classes.group}
                                value={this.props.playerCount}
                                onChange={this.props.handleForm('playerCount')}
                            >
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Stacking</FormLabel>
                            <RadioGroup
                                aria-label="count"
                                className={classes.group}
                                value={this.props.stacking}
                                onChange={this.props.handleForm('stacking')}
                            >
                                <FormControlLabel value="horizontal" disabled={this.props.playerCount === "1"} control={<Radio />} label="horizontal" />
                                <FormControlLabel value="vertical" disabled={this.props.playerCount === "1"} control={<Radio />} label="vertical" />
                                <FormControlLabel value="grid" disabled={this.props.playerCount !== "4"} control={<Radio />} label="grid" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Buttons</FormLabel>
                            <RadioGroup
                                aria-label="count"
                                className={classes.group}
                                value={this.props.direction}
                                onChange={this.props.handleForm('direction')}
                            >
                                <FormControlLabel value="row-reverse" control={<Radio />} label="row" />
                                <FormControlLabel value="row" control={<Radio />} label="row-reverse" />
                                <FormControlLabel value="column" control={<Radio />} label="column" />
                                <FormControlLabel value="column-reverse" control={<Radio />} label="column-reverse" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(FormBelow);