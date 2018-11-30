import React from 'react';
import HistoryItem from '../History/HistoryItem/HistoryItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

class History extends React.Component {

    constructor(props) 
    {
        super(props);

        this.state = {
            history:[
                {date:"24/11/2018", bmi:"31", height:"160", weight :"60"}, 
                {date:"25/11/2018", bmi:"32", height:"170", weight :"70"}, 
                {date:"26/11/2018", bmi:"33", height:"180", weight :"80"}, 
                {date:"27/11/2018", bmi:"34", height:"190", weight :"90"},
                
            ]
        }
    }

    componentDidMount() {
        //calls backend to get history and save it into state and render them to the screen
    }

    render() {

        const historyItems = this.state.history.map(historyItem => {
            return (
                <div>
                    <HistoryItem date={historyItem.date} bmi={historyItem.bmi} height={historyItem.height} weight ={historyItem.weight}/>
                    <br/>
                    <Divider/>
                </div>
            );
        })

        return(
            <Card>
                <CardContent>
                    {historyItems}
               </CardContent>
            </Card>
        );

    }
       
}

export default History;