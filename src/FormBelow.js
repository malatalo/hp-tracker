import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    select: {
        width: 150,
    },
    button: {
        margin: theme.spacing.unit,
    },
    hpReset: {
        height: 200,
        margin: '1%',
    }
});

class FormBelow extends Component {

    constructor(props) {
        super(props);
        this.state = { hpSelect: 20, customHP: 20 }
    }

    handleChange = name => event => {
        if (name === "customHP") {
            let chp = event.target.value;
            if (!isNaN(chp))
                this.setState({ [name]: chp });
        } else {
            this.setState({ [name]: event.target.value });
        }
    };

    resetHP = () => {
        let hp = this.state.hpSelect === 0 ? parseInt(this.state.customHP) : this.state.hpSelect;
        this.props.handleHPChange(99, hp);
    }

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
                    <Grid item xs={3}>
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
                    <Grid item xs={3}>
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
                    <Grid item xs={12}>{/* O:) */}</Grid>

                    <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.container}>
                        <Grid item xs="auto" className={classes.hpReset}>
                            <Select
                                className={classes.select}
                                value={this.state.hpSelect}
                                onChange={this.handleChange('hpSelect')}
                                input={<Input name="hpSelect" id="hp-helper" />}
                            >
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                                <MenuItem value={0}>Custom</MenuItem>
                            </Select>
                            <FormHelperText>Reset HP</FormHelperText>
                        </Grid>
                        {this.state.hpSelect === 0 ?
                            <Grid item xs="auto" className={classes.hpReset}>
                                <TextField
                                    label="Custom HP"
                                    type="text"
                                    className={classes.textField}
                                    value={this.state.customHP}
                                    onChange={this.handleChange('customHP')}
                                />
                            </Grid>
                            :
                            null
                        }
                        <Grid item xs="auto" className={classes.hpReset}>
                            <Button variant="contained" color="primary" className={classes.button}
                                onClick={() => this.resetHP()}>
                                Reset HP
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(FormBelow);