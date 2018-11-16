import React, { Component } from "react";
import './addtext.css';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
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
    root2: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        minHeight:'6rem'
/*
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 1px 0px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
*/
    },
    root3: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
                boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
    },
    root4: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        minHeight:'6rem',
        boxShadow:'-2px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px -2px rgba(0, 0, 0, 0.12)',
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
    paddingTopbottom:{
        paddingTop:'2rem',
        paddingBottom:'2rem'
    },
    paddingTop1:{
        paddingTop:'0.4rem',
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
        width:'100%',
        padding: '0',
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
        marginTop:'1rem'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
        color:'rgba(176, 171, 171, 0.87)'
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
        width: '12rem',
        height: '10rem',
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
        width: '100%',
        height: 'auto'
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


class Addtext extends Component {
    state = {
        multiline: '',
        files: []
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
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
                    <text
                        alt={index}
                        src={file.preview}
                        className={classes.imgAvatar}
                    />
                </div>
            </div>
        ));
        return (
            <div className="addtext">
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
                                    justify="center"
                                    alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12} spacing={0}>
                                    <Grid item xs={6} sm={8} md={9} lg={9} xl={6}>
                                        <form className={classes.container} noValidate autoComplete="off">
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
                                        </form>
                                    </Grid>
                                    <Grid container
                                          direction="row"
                                          justify="flex-end"
                                          alignItems="center" item xs={6} sm={4} md={3} lg={3} xl={6}>
                                        <Button component={Link} to="/corporate/addcontent" className="minwidth">
                                            <img src="/assets/video.svg" alt="icon" className={classes.avatar} />
                                        </Button>
                                        <Button component={Link} to="/corporate/addimage" className="minwidth">
                                            <img src="/assets/image select.svg" alt="icon" className={classes.avatar} />
                                        </Button>

                                        <Button component={Link} to="/corporate/addtext" className="minwidth">
                                            <img src="/assets/text selected.svg" alt="icon" className={classes.avatar} />
                                        </Button>

                                    </Grid>
                                </Grid>
                            </Paper>

                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTopbottom} spacing={24}>
                                <Grid item xs={7} sm={7} md={7} lg={7} xl={8}>
                                    <Paper className={classes.root2}>
                                        <form className={classes.container} noValidate autoComplete="off">
                                            <Input
                                                placeholder="Your text goes here(Max 2000 words)"
                                                multiline
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'Description',
                                                    'type':'text',
                                                }}
                                                classes={{
                                                    underline: classes.cssUnderline,
                                                }}
                                            />
                                        </form>
                                    </Paper>

                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={3}>
                                        {/*<input
                                            accept="text/plain/"
                                            className={classes.uplod}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                        />*/}
                                        {/*<label htmlFor="contained-button-file">*/}
                                            <ReactDropzone
                                                accept="text/*"
                                                onDrop={this.onPreviewDrop}
                                                style={{width:'auto',height:'auto'}}>
                                            <Paper className={classes.root4}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center" style={{cursor:'pointer'}}>
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop1}>
                                                        <Typography variant="button" style={{fontSize:'0.75rem'}} gutterBottom className={classes.color}>
                                                            Click to Browse or drag
                                                        </Typography>
                                                        <Grid className={classes.paddingTop1}>
                                                            <img src="/assets/move-arrows.svg" alt="img" className={classes.img}/>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                            </ReactDropzone>
                                    {/*    </label>*/}
                                </Grid>
                            </Grid>
                            {thumbs}
                        </Paper>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={12} xl={12} spacing={8}>
                            <Grid item xs={12} sm={12} md={2} lg={2} xl={2} >
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
Addtext.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Addtext);
