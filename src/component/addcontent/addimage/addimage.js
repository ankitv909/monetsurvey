import React, { Component } from "react";
import './addimage.css';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        /*margin: theme.spacing.unit,*/
        width:'100%',
    },
    root: {
        /*...theme.mixins.gutters(),*/
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    root1: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 1px 0px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    },
    img: {
        width: 30,
        height: 30,
    },
    autospace:{
        paddingTop: theme.spacing.unit * 4,
     /*   paddingBottom: theme.spacing.unit * 0,*/
        color: 'rgba(0, 0, 0, 0.54)',
        textTransform: 'none'
    },
    paddingTop:{
        paddingTop:'2rem'
    },
    paddingTop1:{
        paddingTop:'0.4rem',
    },
    paddingTopbottom:{
        paddingTop:'1rem',
        paddingBottom:'2rem'
    },
    color:{
        color: 'rgba(0, 0, 0, 0.54)',
        textTransform:'none'
    },
    avatar: {
        /*margin: 10,*/
        width: 30,
        height: 30,
    },
    imgresponsive:{
        width:'100%',
        height:'auto',
    },
    minwidth:{
        minWidth:'50px'
    },
    uplod: {
        display: 'none',
    },
    button: {
        margin: theme.spacing.unit,
        padding: '10px 50px',
        backgroundColor:'transparent',
        boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 0px -2px rgba(0, 0, 0, 0.12)',
    },
    nextbutton: {
        margin: theme.spacing.unit,
        background: 'linear-gradient(270deg,#5C95E4 20%,#1838D6)',
        borderRadius: '30px',
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
    },
});


class Addimage extends Component {
    state = {
        value: 0,
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="addimage">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12} spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="button" gutterBottom className={classes.color}>
                            Improve any content with quick feedback from a worldwide audience
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={10} md={9} lg={8} xl={6} className={classes.paddingTop}>
                        <Paper  elevation={1}>
                            <Paper className={classes.root1} >
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12} spacing={0}>
                                    <Grid item xs={6} sm={8} md={9} lg={9} xl={6}>
                                        <Input
                                            placeholder="https://www.youtube.com/watch?v=ojpn2L1jvKw"
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                                'type':'text',
                                            }}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }}
                                        />
                                    </Grid>
                                    <Grid container
                                          direction="row"
                                          justify="flex-end"
                                          alignItems="center" item xs={6} sm={4} md={3} lg={3} xl={6}>
                                        <Button component={Link} to="/addcontent" className="minwidth">
                                            <img src="/assets/video.svg" alt="icon" className={classes.avatar} />
                                        </Button>
                                        <Button component={Link} to="/addimage" className="minwidth">
                                            <img src="/assets/image select.svg" alt="icon" className={classes.avatar} />
                                        </Button>

                                        <Button component={Link} to="/addtext" className="minwidth">
                                            <img src="/assets/text selected.svg" alt="icon" className={classes.avatar} />
                                        </Button>

                                    </Grid>
                                </Grid>

                            </Paper>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTopbottom}>
                                    <input
                                        accept="image/"
                                        className={classes.uplod}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span" className={classes.button}>
                                            <Grid
                                                container
                                                direction="row"
                                                justify="center"
                                                alignItems="center">
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                            <Typography variant="button" gutterBottom className={classes.color}>
                                               Add
                                            </Typography>
                                            <img src="/assets/add.svg" alt="img" className={classes.img}/>
                                                </Grid>
                                            </Grid>
                                        </Button>
                                    </label>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={12} xl={12} spacing={8}>
                            <Grid item xs={12} sm={12} md={2} lg={2} xl={2} className={classes.paddingTop1}>
                                <Button variant="contained"  className={classes.nextbutton}>
                                   Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
Addimage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Addimage);
