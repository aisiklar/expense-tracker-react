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

    const AddNewExpenseButtonClicked = (buttonState) => {
        console.log(`buttonState in the AddNewExpenseButtonClicked func.: ${buttonState}`);
        setShowAddNewExpenseButton(buttonState);
    }

    const cancelNewExpenseButton = (buttonState) => {
        console.log(`buttonState in the AddNewExpenseButtonClicked func.: ${buttonState}`);
        setShowAddNewExpenseButton(buttonState);
    }
    if (showAddNewExpenseButton === 'true') {
        return (
            <AddNewExpenseButton 
                onClickOfAddNewExpenseButton={AddNewExpenseButtonClicked}
            ></AddNewExpenseButton>
        )
    } else {
        return <div className="new-expense">
        <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler}
            onClickOfCancelNewExpenseButton ={cancelNewExpenseButton}
        ></ExpenseForm>
    </div>
    }

    
}

export default NewExpense;