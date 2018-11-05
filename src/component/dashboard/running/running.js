import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import  './running.css'


const styles = theme => ({

});


class Running extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <div className="running">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    item xs={12} lg={12} md={12} sm={12} xl={12}
                >
                    run
                </Grid>
            </div>
        );
    }
}
Running.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Running);
