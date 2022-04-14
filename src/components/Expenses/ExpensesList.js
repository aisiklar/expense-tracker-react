import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpensesList = props => {
    console.log(`props.selectedYear: ${props.selectedYear}`);
    console.log('props.item array:');
    console.log(props.item);
    console.log(`props.item.length: ${props.item.length}`);
  
    if (props.item.length === 0) {
        return (
        <h1>No Expenses in the selected year</h1>
        )
    } else {
        return (
            <div>
                {props.item.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                    )
                )}
        </div>
        )

    }


   
}

export default ExpensesList;