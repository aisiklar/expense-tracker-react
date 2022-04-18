import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import AddNewExpenseButton from './AddNewExpenseButton';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    
    // to select whether to display AddNewExpenseButton Comp, or not.
    const [showAddNewExpenseButton, setShowAddNewExpenseButton] = useState('true');
    console.log(`showAddNewExpenseButton and typeof(): ${showAddNewExpenseButton}, ${typeof(showAddNewExpenseButton)}`);

    const AddNewExpenseButtonClick = (buttonState) => {
        console.log(`buttonState: ${buttonState}`);
        setShowAddNewExpenseButton(buttonState);
    }

    if (showAddNewExpenseButton === 'true') {
        return (
            <AddNewExpenseButton onClickOfAddNewExpenseButton={AddNewExpenseButtonClick}></AddNewExpenseButton>
        )
    } else {
        return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}>

        </ExpenseForm>
    </div>
    }

    
}

export default NewExpense;