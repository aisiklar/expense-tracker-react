import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    
    const [showingNewExpenseForm, setShowingNewExpenseForm] = useState(false);
    console.log(`showingNewExpenseForm: ${showingNewExpenseForm}`)
    const addNewExpenseButtonClicked = () => {
        console.log('addNewExpenseButton Clicked!')
        setShowingNewExpenseForm(true);
    }

    const cancelNewExpense = () =>{
        console.log('cancelNewExpense Button Clicked!')
        setShowingNewExpenseForm(false);
    }

    return (
    <div className="new-expense">
        {!showingNewExpenseForm && <button onClick={addNewExpenseButtonClicked}>Add New Expense</button>}
        {showingNewExpenseForm && (
            <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler}
            onCancelNewExpense={cancelNewExpense}>
        </ExpenseForm>)}
    </div>)
}

export default NewExpense;