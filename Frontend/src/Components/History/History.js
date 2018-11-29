import React from 'react';
import HistoryItem from '../History/HistoryItem/HistoryItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';


const History = (props) => {
    return(
        <Card>
            <CardContent>
                <HistoryItem date="24/11/2018" bmi="31" height="160" weight ="60"/>
                <br/>
                <Divider/>
                <HistoryItem date="24/11/2018" bmi="31" height="160" weight ="60"/>
                <br/>
                <Divider/>
                <HistoryItem date="24/11/2018" bmi="31" height="160" weight ="60"/>
           </CardContent>
        </Card>
    );
    
    }

export default History;