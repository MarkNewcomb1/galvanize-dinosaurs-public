import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const styles = {
    root: {
        paddingBottom: '1rem'
    },
}
const Header = (props) => {
    console.log(props)
    const { classes } = props;
    return (
        <AppBar 
        position="static" 
        color="primary"
        className={classes.root}
        >
            <header>
                <img src={require("../assets/g-dino.png")} alt="Dinosaur Logo" />
            </header>
        </AppBar>
    );
}

export default withStyles(styles)(Header);