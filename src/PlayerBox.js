import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OpacityIcon from '@material-ui/icons/Opacity';
import WhatsHotIcon from '@material-ui/icons/Whatshot';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center',
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, .2)",
    },
    button: {
        margin: theme.spacing.unit,
    },
    container: {
        height: "100%",
    },
    addButton: {
        filter: "opacity(80%)",
    },
    removeButton: {
        filter: "opacity(80%)",
    },
    text: {
        color: "#212121",
        textShadow: "0px 0px 15px white",
    }
});

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: red,
    },
});

class PlayerBox extends Component {
    render() {
        const { classes } = this.props;
        let ddirection = this.props.direction === "c" || this.props.direction ==="h" ? "column-reverse" : "row" ;
        return (
            <Grid item xs={this.props.playerWidth} style={{ height: this.props.paperHeight }}>
                <Paper className={classes.paper} style={{ paddingTop: 10, paddingBottom: 10, height: "100%" }}>
                    <Grid container direction={ddirection} justify="center" alignItems="center" className={classes.container}>
                        <MuiThemeProvider theme={theme}>
                            <Grid container justify="center" alignItems="center" xs={4}>
                                <Button variant="fab" aria-label="Add" color="secondary"
                                    onClick={() => this.props.handleHPChange(this.props.id, -1)} className={classes.addButton}>
                                    { /* <RemoveIcon />
                                    <WhatsHotIcon */ }
                                    <OpacityIcon />
                                </Button>
                            </Grid>
                            <Grid container justify="center" alignItems="center" xs={4}>
                                <Typography variant="display4" className={classes.text} style={{ margin: 0 }}>
                                    {this.props.player.hp}
                                </Typography>
                            </Grid>
                            <Grid container justify="center" alignItems="center" xs={4}>
                                <Button variant="fab" aria-label="Add" color="primary"
                                    onClick={() => this.props.handleHPChange(this.props.id, 1)} className={classes.removeButton}>
                                    { /* <AddIcon /> */}
                                    <FavoriteIcon />
                                </Button>
                            </Grid>
                        </MuiThemeProvider>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(PlayerBox);