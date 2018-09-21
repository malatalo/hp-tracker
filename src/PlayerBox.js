import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OpacityIcon from '@material-ui/icons/Opacity';
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
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
        margin: 0,
    }
});

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: red,
    },
});

class PlayerBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotate: 0,
        }
    }

    rotateText = () => {
        let rotate = this.state.rotate + 90 > 270 ? 0 : this.state.rotate + 90;
        this.setState({ rotate });
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid item xs={this.props.paperWidth} style={{ height: this.props.paperHeight + '%' }}>
                <Paper id="paper" className={classes.paper} style={{ paddingTop: 10, paddingBottom: 10, height: "100%" }}>
                    <Grid container direction={this.props.direction} justify="center" alignItems="center" className={classes.container}>
                        <MuiThemeProvider theme={theme}>
                            <Grid container justify="center" alignItems="center" xs={3}>
                                <Button variant="fab" aria-label="Add" color="primary"
                                    onClick={() => this.props.handleHPChange(this.props.id, 1)} className={classes.removeButton}>
                                    <FavoriteIcon style={{ transform: 'rotate(' + this.state.rotate + 'deg)' }}/>
                                </Button>
                            </Grid>
                            <Grid container justify="center" alignItems="center" xs={4}>
                                <Typography variant="display4" className={classes.text} style={{ transform: 'rotate(' + this.state.rotate + 'deg)' }}
                                onClick={() => this.rotateText()}>
                                    {this.props.player.hp}
                                </Typography>
                            </Grid>
                            <Grid container justify="center" alignItems="center" xs={3}>
                                <Button variant="fab" aria-label="Add" color="secondary"
                                    onClick={() => this.props.handleHPChange(this.props.id, -1)} className={classes.addButton}>
                                    <OpacityIcon style={{ transform: 'rotate(' + this.state.rotate + 'deg)' }}/>
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