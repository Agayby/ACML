import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    typography: { useNextVariants: true },
  });

class SignIn extends React.Component {

    constructor(props) 
    {
        super(props);

        this.state = {
            username: null
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        });
        console.log(this.state.username);
    }

    render(){
        return(
            <Card>
                <CardContent>
                    <br/>
                    <br/>
                    <br/>
                    <Typography variant="h4" color="textPrimary">
                        Enter Your Username 
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        If You don't Have One, Pick a Unique One Now!
                    </Typography>
                    <br/>
                    <br/>
                    <br/>
                    <MuiThemeProvider theme={theme}>
                        <TextField
                        label="Username"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        onChange={this.handleUsername}
                        />
                    </MuiThemeProvider>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </CardContent>
        </Card>

        );
    }

}

export default SignIn;