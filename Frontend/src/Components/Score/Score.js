import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Score extends React.Component {

    constructor(props) 
    {
        super(props);

        this.state = {
            bmi: this.props.bmi,
            color: ""
        }

        if (this.state.bmi < 18.5)
            this.state.color = "royalblue"; 
        else if(this.state.bmi <= 25)
            this.state.color = "mediumseagreen";
        else if(this.state.bmi <= 30)
            this.state.color = "gold";
        else if(this.state.bmi <= 35)
            this.state.color = "orange";
        else if(this.state.bmi <= 40)
            this.state.color = "red";
        else 
            this.state.color = "darkred";
       
    }

    componentDidMount() {
    }

    backHandler = () => {
        this.props.back();
    }

    saveHandler = () => {
        console.log('save button pressed');
    }

    render() {

        return(

            <Card>
                <CardContent>
                    <div className = "column">
                        <Typography variant="h6" color="primary">
                            Your BMI Score:
                        </Typography>
                        <br/>
                        <Card style= {{backgroundColor: this.state.color }}>
                            <CardContent>
                                <Typography variant="h4" color="textPrimary" style = {{color: 'white', fontWeight: 'bold'}}>
                                    {this.state.bmi}
                                </Typography>
                            </CardContent>
                        </Card>
                        <br/>
                        <Card>
                            <CardContent>
                                <div className="row" style = {{display: 'flex'}}>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'royalblue'}}> Underweight </label>
                                    </div>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'royalblue'}}> less than 18.5 </label>
                                    </div>
                                </div>
                                <div className="row" style = {{display: 'flex'}}>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'mediumseagreen'}}> Normal </label>
                                    </div>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'mediumseagreen'}}> 18.5 - 25 </label>
                                    </div>
                                </div>
                                <div className="row" style = {{display: 'flex'}}>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'gold'}}> Overweight </label>
                                    </div>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'gold'}}> 25 - 30 </label>
                                    </div>
                                </div>
                                <div className="row" style = {{display: 'flex'}}>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'orange'}}> Obese </label>
                                    </div>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'orange'}}> 30 - 35 </label>
                                    </div>
                                </div>
                                <div className="row" style = {{display: 'flex'}}>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'red'}}> Severly Obese </label>
                                    </div>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'red'}}> 35 - 40 </label>
                                    </div>
                                </div>
                                <div className="row" style = {{display: 'flex'}}>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'firebrick'}}> Very Severly Obese  </label>
                                    </div>
                                    <div className="column" style = {{flex: '50%'}}>
                                        <label style = {{color: 'firebrick'}}> greater than 40  </label>
                                    </div>
                                </div>
                                
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
                <div className="row" style = {{display: 'flex'}}>
                    <div className="column" style = {{flex: '95%'}}>
                        <CardActions>
                            <Button variant="contained" color="secondary" onClick={this.backHandler}>
                                Back
                            </Button>
                        </CardActions>
                    </div>
                    <div className="column" style = {{flex: '5%'}} >
                        <CardActions>
                            <Button variant="contained" color="primary" onClick={this.saveHandler}>
                                 Save
                            </Button>       
                        </CardActions>
                    </div>
                </div>
            </Card>

        );
    }


}

export default Score;