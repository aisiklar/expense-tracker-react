import React from 'react'; // aslında yeni nesil react app'de gerekmiyor
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)      
    },
    {
      id: 'e2',
      title: 'new TV',
      amount: 799.12,
      date: new Date(2022, 1, 14)      
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294,
      date: new Date(2022, 2, 5)      
    }
  ]
  return (
    <div>
      <NewExpense></NewExpense>
     <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
