import React, { useState } from 'react'; // no need to import useState now!!!
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    //const [title, setTitle] = useState(props.title);
    //console.log('ExpenseItem called by react')
    //let originalPropsTitle = props.title;
    //console.log(`title in main body: ${title}`);
    
    const clickHandler = () => {
        //setTitle("updated");
        // const newTitle = setTitle("updated"); //doesn't assign newTitle to the updated props.title!!! undefined
        //console.log('clicked the button');
        //console.log(`originalPropsTitle in clickHandler: ${originalPropsTitle}`);
        //console.log(`title in the clickHandler, it is not changed: ${title}`); 
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>    
        </Card>
    )
}

export default ExpenseItem;
