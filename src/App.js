import React, { useState } from 'react'; // aslında yeni nesil react app'de gerekmiyor
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const dummyExpenses = [
  {
    id: '0',
    title: '',
    amount: '',
    date: new Date('')
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);
  /* const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
 */
  console.log('expenses:');
  console.log(expenses);
  console.log(`expenses.id:${expenses[0].id}, type: ${typeof(expenses[0].id)}`);
  let id = parseInt(expenses[0].id, 10);
  console.log(`id: ${id}, idType: ${typeof(id)}`);
  /* console.log(`expenses.title: ${expenses.title}`);
  console.log(`expenses.amount: ${expenses.amount}`);
  console.log(`expenses.date: ${expenses.date}`); */
  
  const addExpenseHandler = (expense) =>{
    console.log('in App.js, expense:');
    console.log(expense);
    id++;
    expense.id = id.toString();
    setExpenses(prevState => {
      console.log(prevState)
      console.log(prevState);
      if (prevState[0].id == '0'){
        return [expense];    
      } else {
        return [expense, ...prevState];
      }
    })
  }
  
  
  if (expenses[0].id == '0') {
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      </div>
    );
  } else {
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
       <Expenses expenses={expenses}></Expenses>
      </div>
    );
  }

  
}

export default App;
