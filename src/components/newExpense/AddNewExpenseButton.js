import React, {useState} from 'react';
import './AddNewExpenseButton.css';

const AddNewExpenseButton = (props) => {
    
    const buttonHandler = () => {
        console.log('AddNewExpense button clicked!')
        props.onClickOfAddNewExpenseButton('false');
    }

    return (
        <div className="Frame">
            <button type="submit" onClick={buttonHandler}>Click to enter new expenses</button>
        </div>
    )

}

export default AddNewExpenseButton;
