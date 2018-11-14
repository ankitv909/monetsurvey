import React, { Component } from "react";
import './addcontent.css';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import ReactDropzone from "react-dropzone";


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
        paddingBottom: theme.spacing.unit * 0,
        color: 'rgba(0, 0, 0, 0.54)',
        textTransform: 'none'
    },
    paddingTop:{
        paddingTop:'2rem'
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
    uplod: {
        display: 'none',
    },
    button: {
        margin: theme.spacing.unit,
        padding: '10px 50px',
        backgroundColor:'transparent',
        boxShadow: 'none',
    },
    bootstrapInput: {
        fontSize: 10,
        borderBottom: '1px solid #ced4da00 ',
    },
    cssUnderline: {
        '&:after': {
            borderBottomColor: "#ffff !important",
        },
        '&:before': {
            borderBottomColor: "#ffff !important",
        }
    },
    thumb: {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box'
    },
    thumbInner: {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    },
    imgAvatar: {
        display: 'block',
        width: 'auto',
        height: '100%'
    },
    materialIconsCustom: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '150px',
    }
});


class Addcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
        };
    }
    onPreviewDrop = (files) => {
        this.setState({
            files: files.map(file => ({
                ...file,
                preview: URL.createObjectURL(file)
            }))
        });
    };

    componentWillUnmount() {
        // Make sure to revoke the data uris to avoid memory leaks
        const {files} = this.state;
        if (files > 0) {
            for (let i = files.length; i >= 0; i--) {
                const file = files[0];
                URL.revokeObjectURL(file.preview);
            }
        }
    }
    render() {
        const { classes } = this.props;
        const {files} = this.state;

        const thumbs = files.map((file, index) => (
            <div className={classes.thumb} key={index}>
                <div className={classes.thumbInner}>
                    <img
                        alt={index}
                        src={file.preview}
                        className={classes.imgAvatar}
                    />
                </div>
            </div>
        ));
        return (
            <div className="addcontent">
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

                    <Grid item xs={11} sm={10} md={9} lg={8} xl={6} className={classes.paddingTop}>
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
                                                underline: classes.cssUnderline,
                                            }}
                                        />
                                    </Grid>
                                    <Grid container
                                          direction="row"
                                          justify="flex-end"
                                          alignItems="center" item xs={6} sm={4} md={3} lg={3} xl={6}>
                                        <Button component={Link} to="/corporate/addcontent" className="minwidth">
                                            <img src="/assets/video.svg" alt="icon" className={classes.avatar} />
                                        </Button>
                                        <Button component={Link} to="/corporate/addimage" className="minwidth" >
                                            <img src="/assets/image select.svg" alt="icon" className={classes.avatar} />
                                        </Button>

                                        <Button component={Link} to="/corporate/addtext" className="minwidth">
                                            <img src="/assets/text selected.svg" alt="icon" className={classes.avatar} />
                                        </Button>

                                    </Grid>
                                </Grid>

                            </Paper>

                            <Typography variant="button" gutterBottom className={classes.autospace}>
                                OR
                            </Typography>
                            <Typography variant="button" gutterBottom className={classes.color}>
                                Drag and Drop here
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Button variant="contained" component="span" className={classes.button}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                                <ReactDropzone
                                                    accept="image/*"
                                                    onDrop={this.onPreviewDrop}
                                                >
                                                    <i className={`${classes.materialIconsCustom} ${'material-icons'}`}>add</i>
                                                </ReactDropzone>
                                            </Grid>
                                        </Grid>
                                    </Button>
                                    {thumbs}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
Addcontent.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Addcontent);
