import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';
import Score from '../Score/Score';
import SignIn from '../SignIn/SignIn';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Layout extends React.Component {

    constructor(props) 
    {
        super(props);

        this.state = {
            history: false,
            calculator: false,
            score: false,
            signIn: true
        }
    }


    calculatorHandler = () => {
        this.setState({
            history:false,
            calculator:true,
            score: false,
            signIn: false} );

    }

    historyHandler = () => {
       this.setState({
            history:true,
            calculator:false,
            score: false,
            signIn: false} );
        
    }

    render(){
        const { classes } = this.props;

        let currentComponent = null;
        if(this.state.calculator)
        {
            currentComponent = (
                <Calculator/>
            )
        }

        if(this.state.history)
        {
            currentComponent = (
                <History/>
            )
        }

        if(this.state.score)
        {
            currentComponent = (
                <Score/>
            )
        }

        if(this.state.signIn)
        {
            currentComponent = (
                <SignIn/>
            )
        }


    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                BMI Calculator
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key='Calculator' onClick={this.calculatorHandler}>
                <ListItemText primary='Calculator' />
                </ListItem>
                <ListItem button key='History' onClick={this.historyHandler}>
                <ListItemText primary='History' />
                </ListItem>
            </List>
            <Divider />
            
        </Drawer>
        <main className={classes.content}>
        <div className={classes.toolbar} />

            {currentComponent}
            
        </main>
        </div>
    );

    }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);